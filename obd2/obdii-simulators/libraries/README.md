---
title: "Libraries"
description: "Notes on Libraries."
---

# Libraries

Python libraries for **simulating OBD-II / ELM327** adapters during app development without a vehicle.

## Source

- [ELM327-emulator on PyPI](https://pypi.org/project/ELM327-emulator/)

## In this section

| Package | Role |
|---------|------|
| [OBD2 Simulator](./obd2-simulator.md) | Full OBD2 stack simulation for device testing |
| [ELM327-emulator](./elm327-emulator.md) | Multi-ECU ELM327 adapter emulator |

## ELM327-emulator highlights

- Serial, TCP/IP, or Bluetooth transport
- Stateless OBD-II + stateful UDS / ISO-TP / KWP2000
- Plugin architecture for custom ECU scenarios (`scenario car` = Toyota Auris Hybrid flow)
- Works with **python-OBD** and mobile OBD apps

## Install

```bash
pip install ELM327-emulator
```

## Related

- [OBDII Simulators](../README.md)
- [Creating A Wireless OBDII Scanner](../../guides/creating-a-wireless-obdii-scanner.md)
