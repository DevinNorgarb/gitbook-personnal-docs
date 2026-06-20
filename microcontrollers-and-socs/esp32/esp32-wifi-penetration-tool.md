---
title: "ESP32 WiFi Penetration Tool"
description: "Notes on ESP32 WiFi Penetration Tool."
---

# ESP32 WiFi Penetration Tool

Firmware and tooling that turns an ESP32 into a portable WiFi penetration / security assessment device.

## Source

- [risinek/esp32-wifi-penetration-tool](https://github.com/risinek/esp32-wifi-penetration-tool)

## Overview

The project bundles WiFi attack and reconnaissance features for the ESP32 platform — useful for learning 802.11 security, lab testing, and authorized assessments only.

## Typical capabilities

- Monitor and sniff WiFi traffic (where hardware/firmware allows)
- Deauthentication and related 802.11 frame injection patterns
- Handshake capture for offline cracking workflows
- Web or serial UI for controlling attacks from a phone or laptop

## Hardware

- ESP32 dev board (common: ESP32-WROOM modules)
- Stable power supply; external antenna recommended for range

## Build & flash

Follow the repository README: clone, configure with `idf.py` or the documented build path, flash with [esptool](./esptool.md).

> **Legal:** Use only on networks you own or have written permission to test. Unauthorized access is illegal in most jurisdictions.

## Related

- [Evil ESP](./evil-esp.md)
- [ESP32 section](./README.md)
