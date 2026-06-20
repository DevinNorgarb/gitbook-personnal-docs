---
title: "Browser BarcodeDetect API using Image"
description: "Notes on Browser BarcodeDetect API using Image."
---

# Browser BarcodeDetect API using Image

Demo of the **Barcode Detection API** (part of the [Shape Detection API](https://wicg.github.io/shape-detection-api/)) decoding barcodes from an image file in the browser — without a live camera stream.

## Source

- [CodePen demo](https://codepen.io/devromeister/pen/OJqGLjN) — BarcodeDetector with image input

## API overview

`BarcodeDetector` is available in Chromium-based browsers (check `('BarcodeDetector' in window)`). It accepts `ImageBitmap`, `Blob`, `ImageData`, or `HTMLImageElement` / `HTMLVideoElement` sources.

```javascript
const detector = new BarcodeDetector({ formats: ['qr_code', 'code_128'] });
const barcodes = await detector.detect(imageElement);
barcodes.forEach((code) => {
  console.log(code.rawValue, code.format, code.boundingBox);
});
```

Supported formats vary by browser; common values include `qr_code`, `ean_13`, `code_128`, `data_matrix`.

## What the demo shows

The CodePen loads a sample image, runs `BarcodeDetector.detect()`, and renders detected barcode bounds and decoded values — useful for testing detection without `getUserMedia` permissions.

[Open live demo on CodePen →](https://codepen.io/devromeister/pen/OJqGLjN)

## Related

- [Shape Detection](./shape-detection/README.md)
- [Browser APIs](../README.md)
