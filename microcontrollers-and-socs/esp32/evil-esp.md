---
title: "EVIL-ESP"
description: "Notes on EVIL-ESP."
---

# EVIL-ESP

A super portable evil device based on the **ESP8266**, running **MicroPython**, with a single button and small OLED display.

## Source

- [tomellericcardo/EVIL-ESP](https://github.com/tomellericcardo/EVIL-ESP)

## Attacks

| Attack | Behavior |
|--------|----------|
| **Beacon spammer** | Floods fake WiFi beacons so many phantom APs appear nearby |
| **Captive portal** | Hosts a “free hotspot” and redirects users to a registration page (credentials logged, no real sign-in) |
| **Evil twin** | Clones a protected network’s ESSID as an open AP; captive portal asks for the WiFi password “to complete a firmware upgrade” |

Credentials land in `data/captive_portal/log.csv` and `data/evil_twin/log.csv` (viewable on-device or on the MicroPython console at startup).

## Installation

1. Wire an I2C OLED and push button (pin with pull-up)
2. Flash MicroPython from the repo `firmware/` folder
3. Edit `data/config/config.json` for hardware and preferences
4. Upload the project tree (`ampy` or similar)

Optional external antenna and power bank for portability. **Headless mode:** disable display/button in config and set the startup attack (evil twin needs target SSID in config).

## Configuration mode

Start config mode, join the board’s setup AP, and change attack options in the captive config page without reflashing.

## Deauthentication note

MicroPython cannot send 802.11 deauth frames on current Espressif SDK versions. For evil-twin workflows, the repo includes a separate [Arduino deauther sketch](https://github.com/tomellericcardo/EVIL-ESP/tree/master/deauther) for another ESP8266, or use authorized lab tooling on Linux.

> Use responsibly and only on networks you own or are permitted to test.

## Related

- [ESP32 WiFi Penetration Tool](./esp32-wifi-penetration-tool.md)
- [esptool](./esptool.md)
