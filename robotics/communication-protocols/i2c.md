# I2C

<https://www.arduino.cc/reference/en/language/functions/communication/wire/>

<https://docs.arduino.cc/learn/communication/wire/>

## Contents

- Introduction
- Bus topology and pull-ups
- 7-bit addressing
- Arduino Wire basics
- Example 1 — bus scanner
- Example 2 — read a register
- Example 3 — write a register
- Clock speed and long cables
- Multi-master and error handling
- I2C vs SMBus
- Common mistakes
- Related notes in this repo

## Introduction

**I2C** (Inter-Integrated Circuit, often written **I²C**) is a **two-wire bus**: **SDA** (data) and **SCL** (clock). One or more **master** devices clock the bus; **slave** devices have fixed 7-bit (or 10-bit) addresses and respond when addressed.

Typical uses: IMUs, magnetometers, port expanders, OLED displays, EEPROM, RTC chips, and Pixhawk **MAG** ports (DF13 to I2C).

Unlike UART, many devices share the same two wires—each must have a **unique address**.

## Bus topology and pull-ups

```text
        +3.3V or +5V
           |
          [Rp]     [Rp]   <-- pull-ups (often 4.7k @ 5V, 2.2k–4.7k @ 3.3V)
           |       |
   SDA ----+---+---+---- SDA (all devices)
   SCL ----+---+---+---- SCL
           |   |   |
         Master Slave Slave ...
           |
          GND (common)
```

- **Open-drain** lines: devices only pull low; pull-ups pull high.
- **Rp** value depends on voltage, bus capacitance, and speed—follow sensor breakout recommendations.
- Keep wires **short** for 400 kHz Fast Mode; use lower clock or I2C buffer for long runs.

## 7-bit addressing

Addresses are usually given in hex **without** the R/W bit:

| Address (7-bit) | Device (example) |
|-----------------|------------------|
| `0x48` | TMP102 temperature sensor |
| `0x68` | MPU6050 / many IMUs |
| `0x76` / `0x77` | BMP280 / BME280 |
| `0x3C` / `0x3D` | SSD1306 OLED |

The 8-bit value sent on the wire is `(address << 1) | read_bit`.

**Address clashes:** some breakouts expose an **ADDR** pin or solder jumper to shift address—check schematic.

## Arduino Wire basics

Default pins (Uno / Nano):

| Signal | Uno pin |
|--------|---------|
| SDA | A4 |
| SCL | A5 |

On ESP32, default pins are configurable—see [ESP32 I2C pins](../../microcontrollers-and-socs/esp32/README.md#esp32-i2c-pins).

```cpp
#include <Wire.h>

void setup() {
  Serial.begin(115200);
  Wire.begin();           // master mode, default pins
  // Wire.begin(SDA, SCL); // ESP32 / custom pins
  Wire.setClock(400000);  // optional: 400 kHz Fast Mode
}

void loop() {
  // transfer functions here
}
```

**Always** consult the slave datasheet for register map, address, and whether registers are **8-bit** or **16-bit** indexed.

## Example 1 — bus scanner

Finds devices that ACK an address probe:

```cpp
#include <Wire.h>

void setup() {
  Serial.begin(115200);
  while (!Serial) { ; }
  Wire.begin();
  Serial.println("I2C scanner");

  for (uint8_t addr = 1; addr < 127; addr++) {
    Wire.beginTransmission(addr);
    uint8_t err = Wire.endTransmission();
    if (err == 0) {
      Serial.print("Found 0x");
      if (addr < 16) Serial.print('0');
      Serial.println(addr, HEX);
    }
  }
  Serial.println("Done");
}

void loop() {}
```

`endTransmission()` return codes: `0` success, `1` data too long, `2` NACK on address, `3` NACK on data, `4` other error.

## Example 2 — read a register

Many sensors expose a register pointer: write register address, then **repeated start** and read bytes.

```cpp
// Read 2 bytes from register 0x00 at address 0x48 (example device)
uint8_t deviceAddr = 0x48;
uint8_t reg = 0x00;

Wire.beginTransmission(deviceAddr);
Wire.write(reg);
Wire.endTransmission(false);  // false = repeated START, don't release bus

Wire.requestFrom((int)deviceAddr, (int)2);
if (Wire.available() >= 2) {
  uint8_t msb = Wire.read();
  uint8_t lsb = Wire.read();
  int16_t raw = (int16_t)((msb << 8) | lsb);
  Serial.println(raw);
}
```

Pattern names vary: **write pointer → read** is universal; byte order (MSB first) is device-specific.

## Example 3 — write a register

```cpp
uint8_t deviceAddr = 0x20;  // PCF8574 port expander (example)
uint8_t reg = 0x00;
uint8_t value = 0xFF;

Wire.beginTransmission(deviceAddr);
Wire.write(reg);
Wire.write(value);
uint8_t err = Wire.endTransmission();
if (err != 0) {
  Serial.print("I2C write error ");
  Serial.println(err);
}
```

For devices without a register address (simple EEPROM-style), omit the register byte and stream data per datasheet.

## Clock speed and long cables

| Mode | Max clock (typical) |
|------|---------------------|
| Standard | 100 kHz |
| Fast | 400 kHz |
| Fast Mode Plus | 1 MHz |

Reduce `Wire.setClock(100000)` when you see intermittent NACKs on breadboards or long harnesses.

## Multi-master and error handling

Arduino `Wire` is usually **single master**. Multiple masters on one bus require arbitration support—avoid unless you know the hardware design.

On failure: log `endTransmission()` code, retry with backoff, and avoid tight infinite loops that block the rest of the robot stack.

## I2C vs SMBus

SMBus is a subset/stricter cousin of I2C (timeouts, voltage levels). Many consumer sensors speak I2C-like protocols; follow timing in the datasheet if a “SMBus” label appears.

## Common mistakes

- **Missing pull-ups** — SDA/SCL float, random failures.
- **Wrong address** — 8-bit address from datasheet used as 7-bit (shift right by one).
- **No repeated START** — using `endTransmission()` then separate `requestFrom()` without `false` breaks some devices.
- **Reading without checking `Wire.available()`** — stale or `-1` data.
- **5 V I2C to 3.3 V-only sensor** — use level shifter or 3.3 V board.

## Related notes in this repo

- [UART](./uart.md) — point-to-point async serial
- [SPI](./spi.md) — faster peripheral bus with separate CS lines
- [Pixhawk README](../../robotics/pixhawk/README.md) — GPS/MAG I2C wiring notes
- [ESP32 pin reference](../../microcontrollers-and-socs/esp32/README.md#esp32-i2c-pins)
