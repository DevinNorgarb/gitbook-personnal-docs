# Sentry Troubleshooting

## Self-Hosted Troubleshooting

Please keep in mind that the [self-hosted repository](https://github.com/getsentry/self-hosted) is geared towards low traffic loads (less than \~1 million submitted Sentry events per month). Folks needing larger setups or having event spikes can expand from here based on their specific needs and environments. If this is not your cup of tea, you are always welcome to [try out hosted Sentry](https://sentry.io/signup/).

### General <a href="#general" id="general"></a>

You can see the logs of each service by running `docker compose logs <service_name>`. You can use the `-f` flag to "follow" the logs as they come in, and use the `-t` flag for timestamps. If you don't pass any service names, you will get the logs for all running services. See the [reference for the logs command](https://docs.docker.com/compose/reference/logs/) for more info.

### Kafka <a href="#kafka" id="kafka"></a>

One of the most likely things to cause issues is Kafka. The most commonly reported error is

LogCopied

```log
Exception: KafkaError{code=OFFSET_OUT_OF_RANGE,val=1,str="Broker: Offset out of range"}
```

This happens where Kafka and the consumers get out of sync. Possible reasons are:

1. Running out of disk space or memory
2. Having a sustained event spike that causes very long processing times, causing Kafka to drop messages as they go past the retention time
3. Date/time out of sync issues due to a restart or suspend/resume cycle

#### Recovery <a href="#recovery" id="recovery"></a>

Note: These solutions may result in data loss when resetting the offset of the snuba consumers.

**Proper solution**

The _proper_ solution is as follows ([reported](https://github.com/getsentry/self-hosted/issues/478#issuecomment-666254392) by [@rmisyurev](https://github.com/rmisyurev)):

1.  Receive consumers list:ShellCopied

    ```shell
    docker compose run --rm kafka kafka-consumer-groups --bootstrap-server kafka:9092 --list
    ```
2.  Get group info:ShellCopied

    ```shell
    docker compose run --rm kafka kafka-consumer-groups --bootstrap-server kafka:9092 --group snuba-consumers --describe
    ```
3.  Watching what is going to happen with offset by using dry-run (optional):ShellCopied

    ```shell
    docker compose run --rm kafka kafka-consumer-groups --bootstrap-server kafka:9092 --group snuba-consumers --topic events --reset-offsets --to-latest --dry-run
    ```
4.  Set offset to latest and execute:ShellCopied

    ```shell
    docker compose run --rm kafka kafka-consumer-groups --bootstrap-server kafka:9092 --group snuba-consumers --topic events --reset-offsets --to-latest --execute
    ```

**Tip**

You can replace `snuba-consumers` with other consumer groups or `events` with other topics when needed.

**Another option**

This option is as follows ([reported](https://github.com/getsentry/self-hosted/issues/1690) by [@gabn88](https://github.com/gabn88)):

1.  Set offset to latest and execute:ShellCopied

    ```shell
    docker compose run --rm kafka kafka-consumer-groups --bootstrap-server kafka:9092 --all-groups --all-topics --reset-offsets --to-latest --execute
    ```

Unlike the proper solution, this involves resetting the offsets of all consumer groups and all topics.

**Nuclear option**

The _nuclear option_ is removing all Kafka-related volumes and recreating them which _will_ cause data loss. Any data that was pending there will be gone upon deleting these volumes.

1.  Stop the instance:

    ShellCopied

    ```shell
    docker compose down --volumes
    ```
2.  Remove the Kafka & Zookeeper related volumes:

    ShellCopied

    ```shell
    docker volume rm sentry-kafka
    docker volume rm sentry-zookeeper
    ```
3.  Run the install script again:

    ShellCopied

    ```shell
    ./install.sh
    ```
4.  Start the instance:

    ShellCopied

    ```shell
    docker compose up -d
    ```

#### Reducing disk usage <a href="#reducing-disk-usage" id="reducing-disk-usage"></a>

If you want to reduce the disk space used by Kafka, you'll need to carefully calculate how much data you are ingesting, how much data loss you can tolerate and then follow the recommendations on [this awesome StackOverflow post](https://stackoverflow.com/a/52970982/90297) or [this post on our community forum](https://forum.sentry.io/t/sentry-disk-cleanup-kafka/11337/2?u=byk).

### Redis <a href="#redis" id="redis"></a>

Redis is used both as a transactional data store and a work queue of Celery in the self-hosted setup. For this reason, it may get overwhelmed during event spikes. We have made some significant improvements regarding this starting from version `20.10.1`. If you are still having issues, you may look into scaling out Redis itself or switching to a different Celery broker, such as [RabbitMQ](https://www.rabbitmq.com/).

### Workers <a href="#workers" id="workers"></a>

If you are seeing an error such as

TextCopied

```
Background workers haven’t checked in recently. It seems that you have a backlog of 200 tasks. Either your workers aren’t running or you need more capacity.
```

you may benefit from using additional, dedicated workers. This is achieved by creating new `worker` services in `docker-compose.override.yml` and tying them to specific queues using the `-Q queue_name` argument. An example would be:

YAMLCopied

```yaml
worker1:
    << : *sentry_defaults
    command: run worker -Q events.process_event
```

To see a more complete example, please see [a sample solution on our community forum](https://forum.sentry.io/t/how-to-clear-backlog-and-monitor-it/10715/14?u=byk).

### Postgres <a href="#postgres" id="postgres"></a>

Postgres is used for the primary datastore, as well as the [nodestore](https://develop.sentry.dev/services/nodestore/) which is used to store key/value data. The `nodestore_node` table can grow rapidly, especially when heavily utilising the Performance Monitoring feature as trace data is stored in this table.

The `nodestore_node` table is cleaned up as part of the `cleanup` task, however Postgres may not get a chance to vacuum the table (especially under heavy load), so even the rows may be deleted, they're still taking up space on disk.

You can use `pg-repack` which repacks a table live by creating a new table and copying data across, before dropping the old one. You'll want to run this after the clean up script, and note that as it creates a table, **disk usage will spike before going back down**.

An example script below:

ShellCopied

```shell
# Only keep the last 7 days of nodestore data. We heavily use performance monitoring.
docker compose run --rm -T web cleanup --days 7 -m nodestore -l debug
# This ensures pg-repack exists before running as the container gets recreated on upgrades
docker compose run --rm -T postgres bash -c "apt update && apt install -y --no-install-recommends postgresql-14-repack && su postgres -c 'pg_repack -E info -t nodestore_node'"
```

If the script above still does not clear up enough disk space, you can try the following in Postgres. This will lead to data loss in event details. _SENTRY\_RETENTION\_DAYS_ will need to be filled in manually.

SqlCopied

```sql
DELETE FROM public.nodestore_node WHERE "timestamp" < NOW() - INTERVAL '[SENTRY_RETENTION_DAYS]';
VACUUM FULL public.nodestore_node;
```

VACUUM FULL actively compacts tables by writing a complete new version of the table file with no dead space. This minimizes the size of the table, but can take a long time. It also requires extra disk space for the new copy of the table, until the operation completes.

### Docker Containers' Healthcheck <a href="#docker-containers-healthcheck" id="docker-containers-healthcheck"></a>

There may be some circumstances which you may want to increase or decrease healthcheck interval, timeout or retries for your custom needs. This can be achieved by editing `HEALTHCHECK_INTERVAL`, `HEALTHCHECK_TIMEOUT`, `HEALTHCHECK_RETRIES` variables' values in `.env`.

Occasionally, you might see an error like this

TextCopied

```
container for service "${servicename}" is unhealthy
```

This can usually be resolved by running `docker compose down` and `docker compose up -d` or rerunning the install script.

### Docker Network Conflicting IP Address <a href="#docker-network-conflicting-ip-address" id="docker-network-conflicting-ip-address"></a>

Self-hosted Sentry is using Docker's bridge networking, in which use a specific private IP range. By default, Docker uses `172.17.0.0/16` range (`172.17.0.0`-`172.17.255.255`). This may cause conflict with your private network. You can change Docker's default IP range by configuring the `/etc/docker/daemon.json` file. If the file does not exists, you can create it yourself.

Assuming your safe IP range is `10.147.0.0/16` and `10.146.0.0/16`, your configuration would be:

JSONCopied

```json
{
    "default-address-pools": [
   {
     "base": "10.147.0.0/16",
     "size": 24
   },
   {
     "base": "10.146.0.0/16",
     "size": 24
   }
 ]
}
```

To apply new Docker daemon configuration, restart your Docker service with `systemctl restart docker`.

Make sure you are using [valid private IP ranges](https://en.wikipedia.org/wiki/Reserved\_IP\_addresses), that is between these ranges:

* `10.0.0.0/8` (address range of `10.0.0.0`–`10.255.255.255`)
* `100.64.0.0/10` (address range of `100.64.0.0`–`100.127.255.255`)
* `172.16.0.0/12` (address range of `172.16.0.0`–`172.31.255.255`)
* `192.0.0.0/24` (address range of `192.0.0.0`–`192.0.0.255`)
* `192.168.0.0/16` (address range of `192.168.0.0`–`192.168.255.255`)
* `198.18.0.0/15` (address range of `198.18.0.0`–`198.19.255.255`)

For further reading, you can see Matthew Stratiotto's article on [The definitive guide to docker's default-address-pools option](https://straz.to/2021-09-08-docker-address-pools/).

### Docker Logs Disk Usage <a href="#docker-logs-disk-usage" id="docker-logs-disk-usage"></a>

If you are suspecting persisted logs from Docker container logs consumes a lot of your disk space, you can configure the amount of persisted logs on Docker by configuring the `/etc/docker/daemon.json` file. If the file does not exists, you can create it yourself.

JSONCopied

```json
{
  "log-driver": "local",
  "log-opts": {"max-size": "10m", "max-file": "3"}
}
```

To apply new Docker daemon configuration, restart your Docker service with `systemctl restart docker`.

If you want to delete immediate Docker logs, you can execute this as `root` user:

ShellCopied

```shell
truncate -s 0 /var/lib/docker/containers/**/*-json.log
```

### Docker Image and Builder Cleanup <a href="#docker-image-and-builder-cleanup" id="docker-image-and-builder-cleanup"></a>

Executing `./install.sh` will build a new Sentry Docker container, executing it often might cause Docker to consume your disk space. You can safely prune old or unneeded Docker containers, image, or builder to re-acquire used disk space. Executing these will not affect current running containers and volumes.

ShellCopied

```shell
docker container prune
docker builder prune
docker image prune --all
# WARNING: Executing "volume prune" might delete `sentry-vroom` volume as it's not an external volume.
docker volume prune
docker network prune
```

Append `-f` flag for no confirmation on deletions.

### Other <a href="#other" id="other"></a>

If you are still stuck, you can always visit our [GitHub issues](https://github.com/getsentry/self-hosted/issues) to search for existing issues or create a new issue and ask for help. You can also visit [Sentry Community Discord server](https://discord.gg/sentry) on #self-hosted channel. Please keep in mind that we expect the community to help itself, but Sentry employees also try to monitor and answer questions when they have time.
