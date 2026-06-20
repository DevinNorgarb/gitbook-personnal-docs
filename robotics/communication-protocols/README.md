---
title: "Communication Protocols"
description: "Notes on Communication Protocols."
---

# Communication Protocols

Reference notes for common **peripheral buses** used in Arduino, ESP32, Pixhawk, and robot sensor wiring.

## In this section

- [Serial](./serial.md) — non-blocking UART receive, markers, and parsing (Robin2 tutorial)
- [UART](./uart.md) — hardware serial ports, wiring, baud, and `Serial` vs USB
- [I2C](./i2c.md) — two-wire bus, addresses, `Wire`, register read/write
- [SPI](./spi.md) — clocked bus, CS lines, modes, and `SPI.transfer`

## Quick comparison

| Protocol | Typical wires | Multi-device | Arduino API | Common on robots |
|----------|---------------|--------------|-------------|------------------|
| UART (async serial) | TX, RX, GND | Point-to-point | `Serial`, `Serial1` | GPS, telemetry radio, debug |
| I2C | SDA, SCL, GND | Yes (addresses) | `Wire` | IMU, magnetometer, OLED |
| SPI | SCK, MOSI, MISO, CS, GND | Yes (per-chip CS) | `SPI` | SD card, LoRa, CAN controller |

For **message framing and parsing** on UART, start with [Serial](./serial.md). For **pin maps on ESP32**, see [ESP32](../../microcontrollers-and-socs/esp32/README.md).
