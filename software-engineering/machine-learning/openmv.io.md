---
title: "openmv.io"
description: "Notes on openmv.io."
---

# openmv.io

**OpenMV** boards run **MicroPython** firmware for on-camera machine vision — no host PC required for many pipelines.

## Source

- [OpenMV documentation](https://docs.openmv.io/)
- [openmv.io](https://openmv.io/)
- [OpenMV IDE](https://openmv.io/pages/download)

## What you can run on-device

- Face detection (BlazeFace), hand landmarks, YOLOv8 person tracking
- AprilTag pose, QR and 1D barcodes, color blob tracking
- Custom TFLite models (e.g. from Roboflow)

## Quick start

1. Install **OpenMV IDE** (Windows/macOS/Linux)
2. Connect the cam over USB (blue heartbeat LED when ready)
3. Connect in IDE → run example scripts from the docs

## Core libraries

| Module | Role |
|--------|------|
| `csi` | Camera sensor config |
| `image` | Blobs, features, drawing |
| `ml` | TFLite inference + postprocessors |
| `machine` | GPIO, I²C, SPI, UART |
| `network` / `microdot` | WiFi and tiny HTTP server |

Board-specific pinouts: N6, AE3, H7, RT1062, Nicla Vision, Portenta, etc.

## Related

- [Machine Learning](./README.md)
- [Google MLKit](./google-mlkit/README.md)
