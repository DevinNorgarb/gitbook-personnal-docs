---
title: Use Raspberry Pi as JTAG Debugger
description: PiOCD — use a Raspberry Pi as a JTAG dongle for embedded debug.
---

# Use Raspberry Pi as JTAG Debugger

**PiOCD** turns a Raspberry Pi into a JTAG adapter for debugging ARM microcontrollers and similar targets.

## Source

- [synthetos/PiOCD](https://github.com/synthetos/PiOCD)
- [Using a Raspberry Pi as a JTAG Dongle (wiki)](https://github.com/synthetos/PiOCD/wiki/Using-a-Raspberry-Pi-as-a-JTAG-Dongle)

## Status

The project is still maturing — follow the wiki build log for wiring, kernel modules, and OpenOCD integration. A packaged install path is planned.

## Typical workflow

1. Wire Pi GPIO pins to target SWD/JTAG (TCK, TMS, TDI, TDO, GND)
2. Build/install PiOCD per wiki instructions
3. Point OpenOCD or your IDE debugger at the Pi-backed adapter
4. Flash and single-step firmware on the target MCU

## When to use

- Bench bring-up without buying a dedicated J-Link
- Teaching embedded debug on a Pi you already own
- Quick recovery when a board’s USB bootloader is bricked

## Related

- [Raspberry Pi](./README.md)
- [MicroControllers & SoCs](../README.md)
