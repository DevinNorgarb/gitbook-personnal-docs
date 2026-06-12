---
title: Vector Tiles
description: MVT format for efficient web map delivery and client-side styling.
---

# Vector Tiles

**Vector tiles** store geospatial features (points, lines, polygons) in tiled chunks instead of pre-rendered raster images — smaller payloads and dynamic styling in the browser.

## Source

- [Mapbox vector tiles glossary](https://docs.mapbox.com/help/glossary/vector-tiles/)
- [Vector tile specification](https://github.com/mapbox/vector-tile-spec)
- [awesome-vector-tiles](https://github.com/mapbox/awesome-vector-tiles)

## Why vector tiles

| vs Raster | Benefit |
|-----------|---------|
| File size | Only features in tile bounds, simplified per zoom |
| Styling | Recolor roads/labels client-side without re-baking tiles |
| Interaction | Hit-test features for tooltips and filters |

## Common stack

- **PostGIS** `ST_AsMVT()` — generate MVT from SQL ([guide](./geocoding/using-the-new-mvt-function-in-postgis.md))
- **tippecanoe** — build tiles from GeoJSON
- **Mapbox GL JS / MapLibre** — render vector tile sources

## Related

- [Modern FOSS spatial stack](./modern-foss-spatial-stack.md)
- [GIS](./README.md)
