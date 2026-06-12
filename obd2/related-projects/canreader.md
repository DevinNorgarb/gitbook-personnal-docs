---
title: CANreader
description: Android CAN bus client — CanHacker-compatible, multiple adapters.
---

# CANreader

Android application for communicating with CAN bus hardware. A CanHacker-style client for send/receive, logging, and adapter support.

## Source

- [autowp/CANreader](https://github.com/autowp/CANreader)
- [English documentation](https://github.com/autowp/CANreader/blob/master/docs/en/README.md)

## Features

- Send and receive CAN frames (standard 11-bit and extended 29-bit, RTR)
- High-speed and fault-tolerant CAN networks ([CANreader-FT](https://github.com/autowp/CANreader/blob/master/docs/en/canreader-device.md) only)
- CanHacker (Windows) compatibility: TxList, Trace/RxList planned
- Adapters: CANreader device, CanHacker, Seeed CAN Bus Shield
- Connection types: USB serial (multiple chipsets via [UsbSerial](https://github.com/felHR85/UsbSerial)); Ethernet and Bluetooth planned

## Requirements

- Android device
- [CANreader hardware](https://github.com/autowp/CANreader/blob/master/docs/en/canreader-device.md) or a [supported adapter](https://github.com/autowp/CANreader/blob/master/docs/en/adapters.md)

> Useless without a CAN adapter attached.

## Related

- [OBD2 Related Projects](./README.md)
