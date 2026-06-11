# SPI

<https://www.arduino.cc/reference/en/language/functions/communication/spi/>

<https://docs.arduino.cc/learn/communication/spi/>

## Contents

- Introduction
- Signals and topology
- SPI modes (CPOL / CPHA)
- Arduino SPI basics
- Example 1 — loopback sanity check
- Example 2 — register read with CS
- Example 3 — transaction settings
- Sharing the bus
- SPI vs I2C
- Common mistakes
- Related notes in this repo

## Introduction

**SPI** (Serial Peripheral Interface) is a **synchronous** bus: the master drives **SCK** (clock) and **MOSI** (master-out, slave-in); slaves drive **MISO** when selected. Each slave needs its own **CS** (chip select, active low)—also called **SS**.

Typical uses: fast ADCs, SD cards, LoRa/nRF24 radios, CAN controllers (MCP2515), displays, and flash memory.

SPI is **full-duplex**: each clock edge can shift one bit out and one bit in simultaneously.

## Signals and topology

```text
         Master (Arduino)
         ----------------
   SCK  ----+----+----+---- SCK
  MOSI  ----+----+----+---- MOSI
  MISO  ----+----+----+---- MISO
   CS0  ------------------- CS  (device A)
   CS1  ------------------- CS  (device B)
  GND   ----+----+----+---- GND
```

| Signal | Direction (master view) | Role |
|--------|-------------------------|------|
| SCK | Output | Clock |
| MOSI | Output | Data to slave |
| MISO | Input | Data from slave |
| CS | Output per slave | Active low select |

On **Uno / Nano** (hardware SPI):

| Signal | Pin |
|--------|-----|
| SCK | 13 |
| MOSI | 11 |
| MISO | 12 |
| SS (default) | 10 |

You may use **any GPIO** for extra CS lines; only SCK/MOSI/MISO must use the hardware SPI pins for full speed (unless bit-banging).

ESP32 has multiple SPI hosts—see [ESP32 SPI pins](../../microcontrollers-and-socs/esp32/README.md#esp32-spi-pins).

## SPI modes (CPOL / CPHA)

Mode is defined by **clock polarity (CPOL)** and **clock phase (CPHA)**. Master and slave **must match**.

| Mode | CPOL | CPHA | Idle clock | Sample edge |
|------|------|------|------------|-------------|
| 0 | 0 | 0 | low | rising |
| 1 | 0 | 1 | low | falling |
| 2 | 1 | 0 | high | falling |
| 3 | 1 | 1 | high | rising |

Check the sensor/radio datasheet—**Mode 0** is common (many Microchip / Nordic parts).

## Arduino SPI basics

```cpp
#include <SPI.h>

const int CS_PIN = 10;

void setup() {
  Serial.begin(115200);
  pinMode(CS_PIN, OUTPUT);
  digitalWrite(CS_PIN, HIGH);  // deselect
  SPI.begin();
}

void loop() {
  // transfers...
}
```

**Rule:** CS **high** when idle; **low** only for the duration of a transaction with that chip.

## Example 1 — loopback sanity check

Tie **MOSI to MISO** (with care—only for test). Each byte sent should be received back:

```cpp
#include <SPI.h>

void setup() {
  Serial.begin(115200);
  SPI.begin();
  SPI.beginTransaction(SPISettings(1000000, MSBFIRST, SPI_MODE0));
  uint8_t sent = 0xA5;
  uint8_t got = SPI.transfer(sent);
  SPI.endTransaction();
  Serial.print("sent 0x"); Serial.print(sent, HEX);
  Serial.print(" got 0x"); Serial.println(got, HEX);
}

void loop() {}
```

Remove the MOSI–MISO jumper before connecting real hardware.

## Example 2 — register read with CS

Typical pattern: send register address with **read bit** set (often `0x80`), then clock out data.

```cpp
#include <SPI.h>

const int CS_PIN = 10;
const byte READ_REG = 0x80;  // example: bit 7 = read (device-specific)

byte readRegister(byte reg) {
  digitalWrite(CS_PIN, LOW);
  SPI.transfer(reg | READ_REG);
  byte value = SPI.transfer(0x00);  // dummy byte clocks data in
  digitalWrite(CS_PIN, HIGH);
  return value;
}

void setup() {
  Serial.begin(115200);
  pinMode(CS_PIN, OUTPUT);
  digitalWrite(CS_PIN, HIGH);
  SPI.begin();
}

void loop() {
  SPI.beginTransaction(SPISettings(8000000, MSBFIRST, SPI_MODE0));
  byte whoAmI = readRegister(0x0F);  // replace with your chip's ID register
  SPI.endTransaction();
  Serial.print("WHO_AM_I 0x");
  Serial.println(whoAmI, HEX);
  delay(1000);
}
```

Register addressing and dummy cycles vary—always follow the datasheet timing diagram.

## Example 3 — transaction settings

`SPISettings` bundles clock, bit order, and mode for a block of transfers:

```cpp
SPI.beginTransaction(SPISettings(4000000, MSBFIRST, SPI_MODE3));
digitalWrite(CS_PIN, LOW);
SPI.transfer(0x01);
SPI.transfer(0x02);
digitalWrite(CS_PIN, HIGH);
SPI.endTransaction();
```

On AVR, `beginTransaction` / `endTransaction` also arbitrate shared SPI when multiple libraries use the bus.

## Sharing the bus

Multiple chips share **SCK, MOSI, MISO**; each has unique **CS**.

- Only one CS **low** at a time.
- Deselect before switching chips.
- SD card + radio on one bus is common—initialize each with its own library and CS pin.

Some libraries manage CS internally (e.g. `SD.begin(CS)`); avoid double-toggling the same pin.

## SPI vs I2C

| | SPI | I2C |
|---|-----|-----|
| Wires | 4 + CS per chip | 2 (SDA, SCL) |
| Speed | Often MHz | 100–400 kHz typical |
| Addressing | CS GPIO | 7-bit address |
| Distance | Short PCB | Short PCB |
| Best for | Throughput, streams | Many small sensors |

## Common mistakes

- **CS floating** — tie high with pull-up or drive high in `setup`.
- **Wrong SPI mode** — `0xFF` reads and silent chips.
- **Clock too fast** on breadboard — reduce to 1–4 MHz for bring-up.
- **Sharing MOSI/MISO without tri-state** — only one slave drives MISO when selected.
- **Forgot `beginTransaction`** on multi-device AVR sketches — subtle cross-talk between libraries.

## Related notes in this repo

- [I2C](./i2c.md) — two-wire multi-drop bus
- [UART](./uart.md) — async serial
- [Serial](./serial.md) — UART message framing on Arduino
- [nRF24L01 notes](../../microcontrollers-and-socs/lastminuteengineers-nrf24l01-arduino-wireless.md) — SPI wiring and `RF24` usage
- [ESP32 pin reference](../../microcontrollers-and-socs/esp32/README.md#esp32-spi-pins)
