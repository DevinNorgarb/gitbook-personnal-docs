---
title: dji-firmware-tools Github Repo
description: Extract, modify, and repack DJI multirotor firmware packages.
---

# dji-firmware-tools Github Repo

Python tools for extracting, modding, and re-packaging firmware for [DJI](http://www.dji.com) multirotor drones.

## Source

- [o-gs/dji-firmware-tools](https://github.com/o-gs/dji-firmware-tools)
- [Project wiki](https://github.com/o-gs/dji-firmware-tools/wiki)

## Use cases

- **Calibration** after component repair (gimbal Hall sensors, factory routines via custom packets)
- **Parts identification** at board and component level (wiki has hardware maps)
- **Flight parameter modification** via FC parameter arrays (hundreds of tunables)
- **Firmware modification** — unpack, edit binaries, re-pack (signing may block flash on some models)
- **Research** — capture UART/I2C traffic, parse flight logs, compare FW versions

## Key tools (selection)

| Script | Purpose |
|--------|---------|
| `dji_xv4_fwcon.py` | Extract/merge `xV4` firmware containers |
| `dji_imah_fwsig.py` | Decrypt/un-sign `IM*H` modules |
| `dji_mvfc_fwpak.py` | Second-layer FC decryption (Mavic-era) |
| `amba_fwpak.py` / `amba_romfs.py` | Ambarella partition / ROMFS extraction |
| `arm_bin2elf.py` | Wrap ARM binaries as ELF for disassembly |
| `comm_serialtalk.py` | Send DUML packets, read responses |
| `comm_og_service_tool.py` | Service functions (params, gimbal calib) |
| `comm_dat2pcap.py` | Convert `FLY*.DAT` logs to PCAP |

Run any tool without arguments or with `--help` for usage. See `tests/` for worked examples.

> **No step-by-step instructions** are provided intentionally — tools target engineers who understand the risks. Use at your own risk; investigate warnings before flashing modified firmware.

## Related

- [Drones pen-testing section](./README.md)
- [dji-firmware-tools](../../drones/dji-firmware-tools.md)
