# UART

<https://www.arduino.cc/reference/en/language/functions/communication/serial/>

<https://docs.arduino.cc/learn/communication/uart>

## Contents

- Introduction
- UART vs serial
- Wiring and levels
- Baud rate and timing
- Hardware UART on Arduino
- SoftwareSerial (legacy)
- Flow control
- Common mistakes
- Related notes in this repo

## Introduction

**UART** (Universal Asynchronous Receiver/Transmitter) is the hardware peripheral that sends and receives bytes one bit at a time over two wires—**TX** and **RX**—without a shared clock line. On Arduino, the familiar `Serial` object is a UART backed by a **USART** (the synchronous-capable variant of the same block).

Most robot and sensor wiring you label “serial” is UART at 3.3 V or 5 V TTL, optionally converted to RS-232 or RS-485 by a transceiver chip.

## UART vs serial

| Term | Meaning |
|------|---------|
| UART | Hardware block + TX/RX pins |
| Asynchronous serial | Framing: start bit, 8 data bits, optional parity, stop bit(s) |
| `Serial` / `Serial1` | Arduino API wrapping a UART |
| USB serial | USB CDC on boards like Uno R4 / 32-bit Arduinos—not the same pins as `Serial` on AVR Uno |

For **how to receive messages without blocking** (end markers, parsing, binary), see [Serial](./serial.md)—that tutorial applies directly to any UART instance.

## Wiring and levels

- Connect **TX of device A → RX of device B** and **RX of A → TX of B**. TX means “transmit from this device.”
- **Common ground** is required.
- Match **logic levels**: 5 V Arduino to 3.3 V GPS/ESP requires level shifting or a 3.3 V-tolerant input.
- One UART link is **point-to-point** (one talker pair per wire pair unless using a bus transceiver).

```text
  Arduino                    Sensor / module
  -------                    ---------------
  TX  -------------------->  RX
  RX  <--------------------  TX
  GND -------------------->  GND
```

## Baud rate and timing

Both sides must use the same **baud rate** (bits per second). Common values: `9600`, `115200`, `921600`.

At 115200 baud, one byte (~10 bit-times) takes ~87 µs—similar to the timing discussion in [Serial](./serial.md). Design RX code to read **one byte per loop iteration** when you cannot afford to block.

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial && millis() < 3000) {
    // Wait for USB serial on native-USB boards (optional timeout)
  }
  Serial.println("<UART ready>");
}
```

## Hardware UART on Arduino

| Board | Typical `Serial` | Extra UARTs |
|-------|------------------|-------------|
| Uno / Nano | USB via ATmega16U2; `Serial` = USB | None (single hardware UART on 0/1) |
| Mega 2560 | USB | `Serial1`–`Serial3` |
| Leonardo / Micro | USB = `Serial` | `Serial1` on some pins |
| ESP32 | USB often on UART0 | `Serial1`, `Serial2`—see [ESP32 UART pins](../../microcontrollers-and-socs/esp32/README.md#esp32-uart-pins) |

**Uno pin conflict:** hardware UART is on **D0 (RX)** and **D1 (TX)**—same pins as USB programming. Using `Serial` for a GPS while also printing debug over USB shares one port; use **SoftwareSerial on other pins**, a **second hardware UART** (Mega/ESP32), or a **secondary board** as bridge.

```cpp
// Mega: GPS on Serial1, debug on Serial (USB)
void setup() {
  Serial.begin(115200);
  Serial1.begin(9600);
}

void loop() {
  while (Serial1.available() > 0) {
    char c = Serial1.read();
    // process GPS byte...
  }
}
```

## SoftwareSerial (legacy)

`SoftwareSerial` bit-bangs UART on arbitrary GPIO pins on AVR. It is **CPU-heavy**, sensitive to interrupts, and only one direction is reliable at high baud on slow MCUs.

Prefer **hardware UART** or **AltSoftSerial** (limited pins, better timing) when possible. On ESP32/STM32, use extra hardware UARTs instead.

```cpp
#include <SoftwareSerial.h>

SoftwareSerial gpsSerial(4, 3); // RX, TX

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(9600);
}

void loop() {
  if (gpsSerial.available()) {
    Serial.write(gpsSerial.read());
  }
}
```

## Flow control

**None (most hobby links):** sender must not overrun the receiver buffer—use pacing or non-blocking RX patterns from [Serial](./serial.md).

**RTS/CTS (hardware):** receiver asserts readiness; used on some modems and radios.

**XON/XOFF (software):** in-band pause/resume characters—rare on microcontrollers.

## Common mistakes

- **Swapped TX/RX** — no data; scope or loopback test (`TX` tied to `RX`) to verify.
- **Baud mismatch** — garbage characters; confirm with datasheet default.
- **Blocking `readBytesUntil()`** — stalls motor control or IMU sampling; prefer byte-at-a-time handlers.
- **Assuming `Serial.flush()` clears RX** — it waits for TX complete; drain RX with `while (Serial.available()) Serial.read();`.
- **5 V on 3.3 V RX** — damaged chip; level-shift.

## Related notes in this repo

- [Serial](./serial.md) — non-blocking receive, markers, parsing (Robin2 tutorial)
- [Serial Input Basics (forum)](../../microcontrollers-and-socs/arduino/forum-arduino-serial-input-basics.md) — original thread + `<1,2,3>` framing FAQ
- [ESP32 pin reference](../../microcontrollers-and-socs/esp32/README.md) — UART/I2C/SPI pin tables
