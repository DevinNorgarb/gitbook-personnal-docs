---
title: Creating A Wireless OBDII Scanner
description: Academic project guide for building a wireless OBD-II diagnostic link.
---

# Creating A Wireless OBDII Scanner

Project documentation for building a **wireless OBD-II scanner** — bridging vehicle CAN/OBD to a phone or PC over Bluetooth/WiFi.

## Source

- [JOHNKEENANIIIMQP2009.pdf](../../../.gitbook/assets/JOHNKEENANIIIMQP2009.pdf) — project report (local asset)

## Typical build

| Layer | Hardware / software |
|-------|---------------------|
| Vehicle | OBD-II port (ISO 15765-4 CAN or legacy K-line) |
| Adapter | ELM327 or STN1110 chipset on UART |
| MCU | Arduino/ESP8266/ESP32 for AT command bridge |
| Wireless | Bluetooth SPP or WiFi TCP server |
| Client | Serial terminal, custom app, or python-OBD |

## Flow

1. MCU powers from OBD pin 16 (+12V regulated)
2. ELM327 handles `AT` init and OBD mode `01` PID requests
3. MCU forwards serial ↔ wireless link
4. Client sends `010C` (RPM), `010D` (speed), etc.

## Safety & legal

- OBD queries while driving can distract — bench-test first
- Do not transmit forged frames on public roads without authorization

## Related

- [OBD2 Guides](./README.md)
- [ELM327 Datasheet](../elm327-datasheet.md)
- [Related Projects](../related-projects/README.md)
