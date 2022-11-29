from typing import Optional

import click

from snuba.clusters.cluster import ClickhouseClientSettings
from snuba.datasets.storages.factory import get_writable_storage
from snuba.datasets.storages.storage_key import StorageKey
from snuba.environment import setup_logging, setup_sentry


@click.command()
@click.option(
    "--clickhouse-host",
    help="Clickhouse server to write to.",
)
@click.option(
    "--clickhouse-port",
    type=int,
    help="Clickhouse native port to write to.",
)
@click.option(
    "--dry-run",
    type=bool,
    default=True,
    help="If true, only print which partitions would be dropped.",
)
@click.option(
    "--storage",
    "storage_name",
    type=click.Choice(["errors", "transactions"]),
    help="The storage to target",
    required=True,
)
@click.option("--log-level", help="Logging level to use.")
def cleanup(
    *,
    clickhouse_host: Optional[str],
    clickhouse_port: Optional[int],
    dry_run: bool,
    storage_name: str,
    log_level: Optional[str] = None,
) -> None:
    """
    Script the removal of data from tables using a customer-input ALTER DELETE command,
    supporting automatically connecting to one replica on each shard in a cluster.

    Optionally, add a verify command to see that each partition has 0 rows remaining.
    """

    setup_logging(log_level)
    setup_sentry()

    from snuba.clickhouse.native import ClickhousePool
    from snuba.data_delete import data_delete, logger

    storage = get_writable_storage(StorageKey(storage_name))

    (
        clickhouse_user,
        clickhouse_password,
    ) = storage.get_cluster().get_credentials()

    cluster = storage.get_cluster()
    database = cluster.get_database()

    if clickhouse_host and clickhouse_port:
        connection = ClickhousePool(
            clickhouse_host,
            clickhouse_port,
            clickhouse_user,
            clickhouse_password,
            database,
        )
    elif not cluster.is_single_node():
        raise click.ClickException("Provide ClickHouse host and port for cleanup")
    else:
        connection = cluster.get_query_connection(ClickhouseClientSettings.DATA_DELETE)

    result = data_delete(connection, "SELECT 1", dry_run=dry_run)

    logger.info(operation="data_delete", result=result)
