---
title: Mapbox Storytelling
description: Scrollytelling map template — narrative + Mapbox GL chapters.
---

# Mapbox Storytelling

**Mapbox Storytelling** is a scroll-driven template for pairing narrative text with map camera moves — ideal for journalism, trip reports, and data explainers.

## Source

- [mapbox/storytelling](https://github.com/mapbox/storytelling) (GitHub template)
- [Mapbox Storytelling guide](https://www.mapbox.com/insights/storytelling-with-maps)

## How it works

1. Fork/clone the storytelling template
2. Edit `config.js` — chapters with `location`, `zoom`, `bearing`, `pitch`, and HTML body
3. Host static files (GitHub Pages, Netlify, etc.)
4. Mapbox GL JS animates the map as the reader scrolls each chapter

## Structure

```javascript
// config.js (conceptual)
chapters: [
  { id: 'intro', location: { center: [-74, 40.7], zoom: 10 }, ... },
  { id: 'chapter-2', ... }
]
```

## Requirements

- Mapbox access token (or MapLibre + compatible style for fully OSS path)
- Basic HTML/CSS comfort for chapter content

## Related

- [GIS](./README.md)
- [Vector Tiles](./vector-tiles.md)
