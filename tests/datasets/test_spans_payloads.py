# It's hard to programmatically code up payloads for spans, so we just
# have a few examples here.

import datetime
import uuid
from typing import Any, Dict, Generator, Mapping, Sequence

import pytest
from sentry_kafka_schemas.schema_types.snuba_spans_v1 import SpanEvent
from structlog.testing import capture_logs

from snuba import state
from snuba.consumers.types import KafkaMessageMetadata
from snuba.datasets.processors.spans_processor import SpansMessageProcessor
from snuba.datasets.storages.factory import get_writable_storage
from snuba.datasets.storages.storage_key import StorageKey
from snuba.processor import InsertBatch
from tests.helpers import write_processed_messages

# some time in way in the future
start_time_ms = 4111111111111
received = 1234567890
duration_ms = 1234560123
project_id = 1234567890123456

required_fields = {
    "duration_ms": duration_ms,
    "exclusive_time_ms": 1234567890123,
    "is_segment": True,
    "project_id": project_id,
    "received": received,
    "retention_days": 90,
    "segment_id": "1234567890123456",
    "sentry_tags": {},
    "span_id": "1234567890123456",
    "start_timestamp_ms": start_time_ms,
    "trace_id": "12345678901234567890123456789012",
}

expected_for_required_fields = {
    "action": "",
    "deleted": 0,
    "description": "",
    "domain": None,
    "duration": 1234560123,
    "end_ms": 234,
    "end_timestamp": int(
        datetime.datetime.fromtimestamp(
            (start_time_ms + duration_ms) / 1000.0
        ).timestamp()
    ),
    "exclusive_time": 1234567890123.0,
    "group": 0,
    "group_raw": 0,
    "is_segment": 1,
    "measurements.key": [],
    "measurements.value": [],
    "module": "",
    "offset": 1,
    "op": "",
    "parent_span_id": 0,
    "partition": 2,
    "platform": "",
    "profile_id": None,
    "project_id": project_id,
    "retention_days": 90,
    "segment_id": 1311768467284833366,
    "segment_name": "",
    "sentry_tags.key": [],
    "sentry_tags.value": [],
    "span_id": 1311768467284833366,
    "span_kind": "",
    "span_status": 2,
    "start_ms": 111,
    "start_timestamp": int(
        datetime.datetime.fromtimestamp(start_time_ms / 1000.0).timestamp()
    ),
    "status": 2,
    "tags.key": [],
    "tags.value": [],
    "trace_id": "12345678-9012-3456-7890-123456789012",
    "transaction_id": None,
    "transaction_op": "",
    "user": "",
}

payloads = [
    {**required_fields},
    {**required_fields, **{"description": "test span"}},
    {
        **required_fields,
        **{
            "event_id": "12345678901234567890123456789012",
            "profile_id": "deadbeefdeadbeefdeadbeefdeadbeef",
        },
    },
    {**required_fields, **{"tags": {"tag1": "value1", "tag2": "123", "tag3": "True"}}},
    {
        **required_fields,
        **{
            "sentry_tags": {
                "user": "user1",
            }
        },
    },
    {
        **required_fields,
        **{
            "sentry_tags": {
                "status": "ok",
                "status_code": "200",
            }
        },
    },
    {
        **required_fields,
        **{
            "sentry_tags": {
                "status": "ok",
                "status_code": "200",
                "group": "deadbeefdeadbeef",
            }
        },
    },
    {
        **required_fields,
        **{
            "sentry_tags": {
                "transaction.method": "GET",
                "user": "user1",
                "release": "release1234",
            }
        },
    },
]

expected_results: Sequence[Mapping[str, Any]] = [
    {**expected_for_required_fields},
    {**expected_for_required_fields, **{"description": "test span"}},
    {
        **expected_for_required_fields,
        **{
            "transaction_id": str(uuid.UUID("12345678901234567890123456789012")),
            "profile_id": str(uuid.UUID("deadbeefdeadbeefdeadbeefdeadbeef")),
        },
    },
    {
        **expected_for_required_fields,
        **{
            "tags.key": ["tag1", "tag2", "tag3"],
            "tags.value": ["value1", "123", "True"],
        },
    },
    {
        **expected_for_required_fields,
        **{
            "user": "user1",
            "sentry_tags.key": ["user"],
            "sentry_tags.value": ["user1"],
        },
    },
    {
        **expected_for_required_fields,
        **{
            "sentry_tags.key": ["status", "status_code"],
            "sentry_tags.value": ["ok", "200"],
            "span_status": 0,
            "status": 0,
        },
    },
    {
        **expected_for_required_fields,
        **{
            "group": int("deadbeefdeadbeef", 16),
            "sentry_tags.key": ["group", "status", "status_code"],
            "sentry_tags.value": ["deadbeefdeadbeef", "ok", "200"],
            "span_status": 0,
            "status": 0,
        },
    },
    {
        **expected_for_required_fields,
        **{
            "sentry_tags.key": ["release", "transaction.method", "user"],
            "sentry_tags.value": ["release1234", "GET", "user1"],
            "user": "user1",
        },
    },
]

assert len(payloads) == len(expected_results)


@pytest.mark.redis_db
class TestSpansPayloads:
    @pytest.fixture()
    def setup_state(self, redis_db: None) -> Generator[None, None, None]:
        state.set_config("log_bad_span_message_percentage", 1)
        yield
        state.delete_config("log_bad_span_message_percentage")

    @pytest.mark.parametrize(
        "payload, expected_result", zip(payloads, expected_results)
    )
    def test_spans_payloads(
        self, setup_state: None, payload: SpanEvent, expected_result: Dict[str, Any]
    ) -> None:
        meta = KafkaMessageMetadata(
            offset=1, partition=2, timestamp=datetime.datetime(1970, 1, 1)
        )
        assert payload
        processed_rows = SpansMessageProcessor().process_message(payload, meta)

        assert isinstance(processed_rows, InsertBatch), processed_rows
        actual_result = processed_rows.rows[0]
        assert actual_result == expected_result

    def test_fail_missing_required(self, setup_state: None, caplog: Any) -> None:
        payload1: Any = required_fields.copy()
        del payload1["trace_id"]
        meta = KafkaMessageMetadata(
            offset=1, partition=2, timestamp=datetime.datetime(1970, 1, 1)
        )
        with pytest.raises(Exception):
            SpansMessageProcessor().process_message(payload1, meta)

        payload2: Any = required_fields.copy()
        del payload2["span_id"]
        meta = KafkaMessageMetadata(
            offset=1, partition=2, timestamp=datetime.datetime(1970, 1, 1)
        )
        with capture_logs() as logs:
            with pytest.raises(Exception):
                SpansMessageProcessor().process_message(payload2, meta)
                assert "Failed to process span message" in str(logs)


class TestWriteSpansClickhouse:
    @pytest.mark.clickhouse_db
    def test_write_spans_to_clickhouse(self) -> None:
        storage = get_writable_storage(StorageKey.SPANS)
        batch = InsertBatch(rows=expected_results, origin_timestamp=None)
        write_processed_messages(storage, [batch])
