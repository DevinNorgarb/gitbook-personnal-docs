---
title: "Google MLKit"
description: "Notes on Google MLKit."
---

# Google MLKit

**ML Kit** brings Google’s on-device machine learning to mobile apps — barcode scanning, face detection, text recognition, and more without shipping large custom models.

## Source

- [ML Kit for developers](https://developers.google.com/ml-kit)
- [Barcode scanning (Android)](https://developers.google.com/ml-kit/vision/barcode-scanning/android)

## In this section

- [ML Kit barcode (Android)](./mlkit-barcode-android.md) — 1D/2D barcode scanning API

## When to use ML Kit

| Use case | API |
|----------|-----|
| QR / product barcodes | Barcode scanning |
| OCR on device | Text recognition |
| Faces / poses | Vision APIs |
| Custom models | TensorFlow Lite integration |

Bundled vs Play Services models trade app size (~200 KB vs ~2.4 MB) for install-time availability — see child page.

## Related

- [Machine Learning](../README.md)
