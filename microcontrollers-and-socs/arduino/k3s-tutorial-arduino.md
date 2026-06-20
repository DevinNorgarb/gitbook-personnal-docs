---
title: "Arduino"
description: "Notes on Arduino."
---

# Arduino

**DIY Arduino Bluetooth Programming Shield** — wirelessly upload sketches to an Arduino without USB tethering.

## Source

- [Make: DIY Arduino Bluetooth Programming Shield](https://makezine.com/projects/diy-arduino-bluetooth-programming-shield/)
- Published on Make Magazine (project tutorial)

## Concept

An Arduino Uno (or compatible) hosts a **Bluetooth serial module** (e.g. HC-05/HC-06) wired to `D0/D1` (with optional auto-reset circuit). The IDE connects over a virtual COM port and triggers reset into the bootloader for wireless `avrdude` uploads.

## Typical wiring goals

- Level-shift Bluetooth module to 5V Arduino logic if needed
- DTR/reset capacitor circuit for auto-reset on serial open
- Power Bluetooth module from regulated 5V or 3.3V per module datasheet

## Use cases

- Sealed enclosures where USB is inaccessible
- Wearables and installations where the board is buried in a project
- Teaching wireless embedded workflows before moving to ESP32 OTA

## Related

- [Arduino](./README.md)
- [MicroControllers & SoCs](../README.md)
