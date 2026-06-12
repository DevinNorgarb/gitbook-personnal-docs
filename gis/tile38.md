---
title: Tile38
description: In-memory geospatial database with real-time geofencing.
---

# Tile38

**Tile38** is an open-source, in-memory **geospatial database** and **geofencing** server with sub-millisecond queries at scale.

## Source

- [tile38.com](https://tile38.com/)
- [tile38/tile38](https://github.com/tile38/tile38)

## Features

- Spatial types: points, bounds, GeoJSON, geohashes, XYZ tiles
- Queries: `INTERSECTS`, `WITHIN`, `NEARBY`
- **Geofencing** — static and roaming fence enter/exit events
- Event hooks → webhooks, Redis, Kafka, NSQ, RabbitMQ

## Example

```bash
tile38-cli SET fleet truck1 POINT 33.5123 -112.2693
tile38-cli SET fleet truck2 POINT 33.4623 -112.4393
tile38-cli NEARBY fleet POINT 33.5 -112.3 6000
```

## When to use

- Live asset tracking with fence alerts (fleet, drones, IoT)
- Replace PostGIS + cron for simple real-time geo rules
- Edge deployments needing a tiny dedicated geo server

## Related

- [GIS](./README.md)
- [Vector Tiles](./vector-tiles.md)
