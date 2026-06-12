---
title: ML Kit barcode scanning (Android)
description: Scan and decode 1D/2D barcodes on Android with ML Kit.
---

# ML Kit barcode scanning (Android)

Recognize and decode barcodes (QR, EAN, PDF417, etc.) on-device with **ML Kit**.

## Source

- [Barcode scanning \| Google for Developers](https://developers.google.com/ml-kit/vision/barcode-scanning/android)

## Install options

| Mode | Gradle dependency | Trade-off |
|------|-------------------|-----------|
| **Bundled** | `com.google.mlkit:barcode-scanning:17.3.0` | +~2.4 MB, instant model |
| **Play Services** | `com.google.android.gms:play-services-mlkit-barcode-scanning:18.3.1` | +~200 KB, may download on first use |

Requires `minSdkVersion` **23+**. Add Google Maven to project `build.gradle`.

## Basic usage pattern

1. Build `InputImage` from CameraX, `Bitmap`, or byte buffer
2. Create `BarcodeScanner` via `BarcodeScanning.getClient()`
3. Call `process(image)` and handle `List<Barcode>` (format, raw bytes, corner points)

For simple QR-only flows, Google’s **Code Scanner** API may be faster and permission-light.

## Image quality

- Smallest barcode unit should be **≥ 2 pixels** wide (2D: 2 px tall)
- EAN-13 ideally **≥ 190 px** wide; dense PDF417 needs more resolution

## Related

- [Google MLKit](./README.md)
- [Browser BarcodeDetect API](../../browsers/apis/browser-barcodedetect-api-using-image.md)
