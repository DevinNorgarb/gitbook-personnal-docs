---
title: Energy usage monitoring with TP-Link smart sockets and InfluxDB
description: Imported notes from Ben Tasker on polling Kasa/Tapo plugs into InfluxDB via Docker
---

# Energy usage monitoring with TP-Link smart sockets and InfluxDB

## Source

- Type: webpage
- Origin: https://www.bentasker.co.uk/posts/blog/house-stuff/capturing-energy-usage-info-with-tapo-kasa-and-influxdb.html
- Imported: 2026-05-08

## Content

Context: monitoring electricity usage with smart sockets; author previously used TP-Link **Kasa** KP115 plugs. TP-Link moved focus to **Tapo** (separate app). Data collection was done with ad-hoc scripts; this post consolidates polling **Kasa** and **Tapo** devices and writing metrics to **InfluxDB**.

### Approach

Run a small Docker image periodically to poll devices and write stats to InfluxDB:

- Docker Hub: `bentasker12/tplink_to_influxdb`
- Source / non-Docker run: https://github.com/bentasker/tplink_to_influxdb

### Configuration (YAML)

Three top-level sections:

1. **`kasa`** — list Kasa devices (IP/hostname + friendly `name` used in Influx).
2. **`tapo`** — Tapo devices plus **Tapo cloud** credentials (`user`, `passw`); auth hits Tapo cloud to obtain a cookie for local access.
3. **`influxdb`** — one or more InfluxDB v2 write API targets (works with InfluxDB Cloud, OSS ≥ 1.8.0 with v2 write API).

**InfluxDB notes:**

- Multiple outputs supported (e.g. cloud + local).
- Optional: write via **Telegraf** using the `influxdb_v2_listener` input.
- OSS ≥ 2.2: can use Edge Data Replication instead of dual-write in the tool.

**Kasa example:**

```yaml
kasa:
  devices:
    - name: "desk-plug"
      ip: 192.168.3.150
    - name: "tumble-dryer"
      ip: 192.168.3.151
```

Note: Kasa “local only” behavior has been broken/removed in the past (TP-Link forum discussions).

**Tapo example:**

```yaml
tapo:
  user: "me@mymail.com"
  passw: "mysecretpass"
  devices:
    - name: "washing-machine"
      ip: 192.168.3.152
    - name: "big-fridge"
      ip: 192.168.3.153
```

Tapo reliance on cloud auth means **less resilient** for purely local monitoring than Kasa.

**Full combined example** (influx + kasa + tapo): see original post; save as e.g. `config.yml`.

### Run container

```bash
docker run \
  --rm \
  --name="tplink_to_influxdb" \
  --net=host \
  -v $PWD/config.yml:/config.yml \
  bentasker12/tplink_to_influxdb:latest
```

- `--rm` — remove container after exit.
- `--net=host` — optional; allows reaching `127.0.0.1` on host for local InfluxDB.

Example stdout:

```text
Plug: desk-plug using 58.992W, today: 0.629 kWh
```

On write failure: `Failed to send point to <influx name>`.

### Scheduling (cron)

Example (every minute); adjust config path:

```cron
* * * * * docker run --rm --name="tplink_to_influxdb" -v /home/ben/docker_files/readings_collect/config.yml:/config.yml --net=host bentasker12/tplink_to_influxdb:latest
```

### InfluxDB schema / Flux

- Measurement: `power_watts`
- Tag: `host` — set to the configured plug **`name`**
- Fields:
  - `consumption` — current power (W)
  - `watts_today` — reported usage today (Wh)

Example Flux (current consumption for one device; replace `${device}`):

```flux
from(bucket: "Systemstats")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r._measurement == "power_watts" and r._field == "consumption")
  |> filter(fn: (r) => r.host == "${device}")
  |> group()
  |> aggregateWindow(every: v.windowPeriod, fn: last)
  |> map(fn: (r) => ({_value: r._value}))
```

Author joins plug usage with **meter** `unit_cost` from host `power-meter` to estimate cost (see post for full join example).

### Dashboards

Examples in repo:

- Grafana: https://github.com/bentasker/tplink_to_influxdb/blob/master/example/grafana_dashboard.json
- Chronograf: https://github.com/bentasker/tplink_to_influxdb/blob/master/example/chronograf_dashboard.json

### Related links (from article)

- Earlier electricity monitoring post: https://www.bentasker.co.uk/posts/blog/house-stuff/739-monitoring-our-electricity-usage-with-influxdb.html
- Kasa discontinued discussion: https://old.reddit.com/r/TPLinkKasa/comments/scfmy6/what_does_kasa_being_discontinued_mean_going/
- Tapo P110 example: https://www.bentasker.co.uk/posts/blog/house-stuff/how-much-more-energy-efficient-is-eco-mode-on-a-dish-washer.html
- Improvements milestone: https://projects.bentasker.co.uk/gils_projects/milestone/utilities/tp-link-to-influxdb/33.html

## Key Takeaways

- **Docker-first** workflow: `bentasker12/tplink_to_influxdb` + YAML for Kasa, Tapo, and Influx outputs.
- **Tapo** needs cloud credentials and is weaker for offline/local-only setups than Kasa.
- **Influx**: measurement `power_watts`, tag `host` = plug name, fields `consumption` (W) and `watts_today` (Wh).
- **Ops**: use `--net=host` if Influx listens on localhost; schedule with cron; example Grafana/Chronograf JSON in the GitHub repo.
