import os
from typing import MutableSequence, Optional, Sequence, Tuple

import click
from arroyo import Message, Partition
from arroyo import Topic as ArroyoTopic
from arroyo.backends.kafka import KafkaConsumer, KafkaPayload

from snuba.datasets.storages.factory import WRITABLE_STORAGES
from snuba.utils.streams.configuration_builder import build_kafka_consumer_configuration

__STORAGE_TO_DLQ_TOPIC = {
    storage: storage.get_table_writer()
    .get_stream_loader()
    .get_dead_letter_queue_topic()
    for storage in WRITABLE_STORAGES.values()
}

STORAGE_SETS_WITH_DLQ = {
    storage.get_storage_set_key().value: topic
    for storage, topic in __STORAGE_TO_DLQ_TOPIC.items()
    if topic is not None
}


@click.group()
def dlq_manager() -> None:
    """
    Tools for Snuba's Dead Letter Queues
    """
    pass


@dlq_manager.command()
@click.option(
    "--storage-set",
    "storage_set",
    type=click.Choice([storage_set for storage_set in STORAGE_SETS_WITH_DLQ]),
    help="The storage set to list dead letters for",
    required=True,
)
@click.option(
    "--offset",
    "offset",
    type=int,
    help="An offset to start reading from, 0 by default",
    default=0,
)
@click.option(
    "--limit",
    "limit",
    type=int,
    help="Max number of messages to display, 10 by default",
    default=10,
)
def list(storage_set: str, offset: int, limit: int) -> None:
    """
    List all messages found in a dead-letter topic
    """
    messages = _consume_dead_letters(storage_set, offset, limit)
    line_break = "-" * 50
    if messages:
        click.echo(
            f"\nListing the first {limit} messages from "
            f"offset {offset} in {storage_set} dead-letter topic:"
            f"\n(see --help for pagination)\n"
        )
        for message in messages:
            click.echo(line_break)
            click.echo(
                {
                    "offset": message.offset,
                    "invalid_message": message.payload.value,
                }
            )
    else:
        click.echo(f"\nNo messages found in {storage_set} dead-letter topic!")
    click.echo(line_break)


def _consume_dead_letters(
    storage_set: str, offset: int, limit: int
) -> Sequence[Message[KafkaPayload]]:
    dead_letter_topic_arroyo = ArroyoTopic(STORAGE_SETS_WITH_DLQ[storage_set].value)
    consumer = _build_consumer(storage_set)
    messages: MutableSequence[Message[KafkaPayload]] = []
    consumer.poll(10)
    if offset != 0:
        try:
            consumer.tell()
            consumer.seek({Partition(dead_letter_topic_arroyo, 0): offset})
        except Exception as e:
            click.echo(f"An error occured: {e}")
            consumer.close()
            return messages

    for _ in range(limit):
        try:
            message = consumer.poll(1)
            if message is None:
                consumer.close()
                return messages
            messages.append(message)
        except Exception as e:
            click.echo(f"An error occured: {e}")
            consumer.close()
            return messages
    return messages


@dlq_manager.command()
@click.option(
    "--storage-set",
    "storage_set",
    type=click.Choice([storage_set for storage_set in STORAGE_SETS_WITH_DLQ]),
    help="The storage set to see info about dead-letter topic for",
    required=True,
)
def info(storage_set: str) -> None:
    """
    Display useful info for a dead-letter topic for a storage set
    """
    earliest_offset, latest_offset = _get_offsets_info(storage_set)
    dead_letter_topic_snuba = STORAGE_SETS_WITH_DLQ[storage_set]
    click.echo(f"\nDisplaying info for {storage_set}:\n")
    click.echo(f"Dead letter topic name: {dead_letter_topic_snuba.value}")
    click.echo(f"Earliest offset: {earliest_offset}")
    click.echo(f"Latest offset: {latest_offset}")


def _get_offsets_info(storage_set: str) -> Tuple[Optional[int], Optional[int]]:
    consumer = _build_consumer(storage_set)
    message = consumer.poll(10)
    earliest_offset = message.offset if message else None
    latest_offset = None
    while message is not None:
        latest_offset = message.offset
        message = consumer.poll(1)
    consumer.close()
    return earliest_offset, latest_offset


def _build_consumer(storage_set: str) -> KafkaConsumer:
    bootstrap_servers = [os.environ.get("BOOTSTRAP_SERVERS") or "localhost:9092"]
    dead_letter_topic_snuba = STORAGE_SETS_WITH_DLQ[storage_set]
    consumer = KafkaConsumer(
        build_kafka_consumer_configuration(
            topic=dead_letter_topic_snuba,
            bootstrap_servers=bootstrap_servers,
            group_id="dlq-manager-consumer",
            auto_offset_reset="earliest",
        )
    )
    dead_letter_topic_arroyo = ArroyoTopic(dead_letter_topic_snuba.value)
    consumer.subscribe([dead_letter_topic_arroyo])
    return consumer
