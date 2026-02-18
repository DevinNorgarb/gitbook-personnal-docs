# Loki

## Meet Grafana LOKI, a Log Aggregation System for Everything

By [_Techno Tim_](https://l.technotim.live/twitter)Posted _4 months ago_  Updated _12 days ago_  _4 min_ read

[![Meet Grafana LOKI, a Log Aggregation System for Everything](https://img.youtube.com/vi/h_GGd7HfKQ8/0.jpg)](https://www.youtube.com/watch?v=h_GGd7HfKQ8)

I’ve been on a quest to find a new logging system. I’ve use quite a few in the past, some open source, some proprietary, and some home grown, but recently I’ve decided to switch. I’ve switched to Grafana Loki for all of my logs for all of my systems - this includes machines, devices, docker systems and hosts, and my all of my kubernetes clusters. If you’re thinking of using Grafana and are also looking for a fast way to log all of your systems, join me as we discuss and configure Grafana Loki

Don’t want to host it yourself? Check out Grafana Cloud and sign up for a free account [https://l.technotim.live/grafana-labs](https://l.technotim.live/grafana-labs)

See all the hardware I recommend at [https://l.technotim.live/gear](https://l.technotim.live/gear)

Don’t forget to check out the [🚀Launchpad repo](https://l.technotim.live/quick-start) with all of the quick start source files.

### Docker Setup <a href="#docker-setup" id="docker-setup"></a>

See [this post](https://docs.technotim.live/posts/docker-compose-install/) on how to install `docker` and `docker-compose`

### Running the container <a href="#running-the-container" id="running-the-container"></a>

If you’re using Docker compose

`docker-compose.yml`

### Loki Config <a href="#loki-config" id="loki-config"></a>

`loki-config.yml`

### Promtail Config <a href="#promtail-config" id="promtail-config"></a>

`promtail-config.yml`

### Loki Docker Driver <a href="#loki-docker-driver" id="loki-docker-driver"></a>

Install docker plugin

Edit docker daemon config

`daemon.json`

Restart docker daemon.

You will also need to recreate your containers after applying this setting \*

### LogQL sample queries <a href="#logql-sample-queries" id="logql-sample-queries"></a>

Query all logs from the `varlogs` stream

Query all logs from the `varlogs` stream and filter on `docker`

Query all logs from the `container_name` label of `uptime-kuma` and filter on `host` of `juno`

Read more about LogQL [here](https://grafana.com/docs/loki/latest/logql/)

### ARM CPU (Raspberry Pi) <a href="#arm-cpu-raspberry-pi" id="arm-cpu-raspberry-pi"></a>

There is a workaround for using this with ARM CPUs. Credit to [AndreiTelteu](https://github.com/AndreiTelteu) for finding this [in this discussion](https://github.com/techno-tim/techno-tim.github.io/discussions/97)

delete `/etc/docker/daemon.json`

Add the vector service to the docker-compose.yml file

Run this command

paste this config in the file:

Credits to this post for the config file: [grafana/loki#2361 (comment)](https://github.com/grafana/loki/issues/2361#issuecomment-826732810)

### Kubernetes Setup <a href="#kubernetes-setup" id="kubernetes-setup"></a>

If you’re looking to set this up in kubernetes, see [this post](https://docs.technotim.live/posts/grafana-loki-kubernetes/)

<br>
