---
title: Browser APIs
description: Shape Detection and barcode scanning web platform APIs.
---

# Browser APIs

Experimental and shipping **web platform APIs** for detecting faces, barcodes, and shapes in camera streams or images.

## Source

- [WICG shape-detection-api](https://wicg.github.io/shape-detection-api)
- [Barcode Detection API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API)

## In this section

| Page | API |
|------|-----|
| [Shape Detection](./shape-detection/README.md) | WICG spec — faces, barcodes, text in live/still images |
| [Barcode Detection API](./barcode-detection-api.md) | `BarcodeDetector` interface |
| [Browser BarcodeDetect API using Image](./browser-barcodedetect-api-using-image.md) | Image-based scanning example |

## Browser support notes

- Barcode Detection is Chromium-first; check `BarcodeDetector` availability before shipping
- Prefer **HTTPS** + user gesture for camera access
- Fallback to [ML Kit](../../machine-learning/google-mlkit/mlkit-barcode-android.md) on native mobile

## Related

- [Browsers](../README.md)
