---
title: "esptool"
description: "Notes on esptool."
---

# esptool

**esptool.py** is the canonical open-source utility for communicating with Espressif SoCs over the serial bootloader.

## Source

- [espressif/esptool](https://github.com/espressif/esptool)
- [Documentation](https://docs.espressif.com/projects/esptool/en/latest/)

## Install

```bash
pip install esptool
```

## Common commands

```bash
# Chip identification
esptool.py chip_id

# Flash firmware
esptool.py --port /dev/ttyUSB0 write_flash 0x1000 bootloader.bin 0x8000 partition-table.bin 0x10000 app.bin

# Erase flash
esptool.py --port /dev/ttyUSB0 erase_flash
```

## When you need it

- Flashing [ESP32 WiFi Penetration Tool](./esp32-wifi-penetration-tool.md) or Arduino/IDF builds
- Recovering bricked boards (hold BOOT, reset, flash)
- Reading MAC, flash size, and security options

## Tips

- Use a reliable USB-serial adapter (CP2102, CH340, native USB on some boards)
- Match baud rate and flash mode to your module datasheet
- `--baud 460800` speeds up large writes when the link is stable

## Related

- [ESP32](./README.md)
- [MicroControllers & SoCs](../README.md)
