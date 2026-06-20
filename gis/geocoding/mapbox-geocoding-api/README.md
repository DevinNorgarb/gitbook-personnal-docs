---
title: "Mapbox Geocoding API"
description: "Notes on Mapbox Geocoding API."
---

# Mapbox Geocoding API

Mapbox **Geocoding API** (part of Mapbox Search) converts addresses to coordinates and vice versa, with global coverage and structured feature types.

## Source

- [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/)
- [Getting started with geocoding](https://docs.mapbox.com/help/getting-started/geocoding/)
- [Reverse geocoding result prioritization](https://docs.mapbox.com/help/getting-started/geocoding/#result-prioritization-in-reverse-geocoding)

## Endpoints (v6)

| Type | Use |
|------|-----|
| **Forward** | `mapbox.places` — query string → ranked features |
| **Reverse** | lat,lon → nearest address/place/POI |

Returns GeoJSON-like features with `place_type`, relevance, and bounding boxes.

## Example

```bash
curl "https://api.mapbox.com/search/geocode/v6/forward?q=1600+pennsylvania&access_token=YOUR_TOKEN"
```

## Tips

- Set `proximity` to bias results near a map center
- Use `types` filter (`address`, `place`, `poi`, …) to reduce noise
- Cache responses — geocoding is billed per request

## In this section

- [Useful Mapbox Geocoding API Info](./useful-mapbox-geocoding-api-info.md)

## Related

- [Geocoding](../README.md)
