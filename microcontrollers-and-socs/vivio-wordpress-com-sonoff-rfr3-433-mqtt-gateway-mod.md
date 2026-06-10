---
title: Sonoff RFR3 DIY — 433 MHz MQTT gateway mod
description: "\"Imported note from Vivio's Blog (WordPress) — hardware mod and Tasmota setup for Sonoff RFR3 as RF gateway.\""
---

# Sonoff RFR3 DIY — 433 MHz MQTT gateway mod

## Source

- Type: webpage
- Origin: https://vivio.wordpress.com/2020/04/23/sonoff-rfr3-433-mqtt-gateway-mod/
- Imported: 2026-05-10

## Content

### Context

The author wanted a UV-C lamp control setup with:

1. Start the lamp from a remote
2. Turn the lamp off if a PIR sensor or door opens
3. Prevent turning the lamp on unless PIR and door are closed

Wi-Fi was kept for monitoring only (unreliable router). Intended signal path: PIR2 / remote / door sensor → RF Bridge → RFR3 relay.

**Limitation:** The Sonoff RF Bridge can learn RF sensors and send RF to the relay, but simple RF did not expose relay state reliably. The **Sonoff RFR3 DIY** has Wi-Fi and RF but is not a stock RF gateway. The goal was an **RF gateway with a relay** that can decode RF sensor traffic and expose **relay state**.

Credits and references:

- [DrFragle and MrShark](https://tech.scargill.net/user/mrshark/) — discussion on [Scargill’s blog (Sonoff RF Bridge)](https://tech.scargill.net/sonoff-rf-bridge/#comment-66682)
- Inspired by [1 TECHNOPHILE — New Sonoff RFR3 as 433ToMQTT gateway](https://1technophile.blogspot.com/2019/08/new-sonoff-rfr3-as-433tomqtt-gateway.html)

### Flash Tasmota

- Flash **Tasmota** on the Sonoff RFR3 DIY. The author notes that eWeLink app firmware 3.5 broke DIY mode; **USB-to-UART at 3.3 V** was required for flashing.
- Use the **`tasmota-sensors.bin`** build from [Tasmota releases](https://github.com/arendst/Tasmota/releases) (full sensor build).

### Hardware modification (RF chip)

On the board, **desolder the SMD resistor** on the RF chip side and **solder a wire** to the terminal described in the TECHNOPHILE article. TECHNOPHILE suggests **cutting a copper trace**; the author **removed the resistor** entirely as cleaner.

**GPIO choice:** TECHNOPHILE uses **GPIO4**, which the author found hard to solder. **[Digiblur](https://www.youtube.com/channel/UC5ZdPKE2ckcBhljTc2R_qNA)** used **GPIO1** as input (ESP **TX** pin on their diagram). The author soldered **GPIO1** for easier access.

**Enclosure:** The extra wire can stop the PCB from sitting flat in the bottom shell and block the tall switch in the top shell — the author **slightly enlarged a hole** in the upper shell so the assembly fits.

### Tasmota configuration

From [Tasmota Discord](https://discord.gg/Ks2Kzd4) (thanks to barbudor, Seth, squalazzo): after this mod you cannot use the stock **Sonoff RF bridge** template on the RFR3. Use **RC-Switch** behavior by assigning the GPIO wired to the RF receiver as **RF Recv (106)**.

Because the author wired **GPIO1**, in **Configuration → Configure Module** set **GPIO1** to **RF Recv (106)**.

After saving, the **Console** should show RF reception alongside relays.

### Notes

- One-off issue: after a **full power cycle**, the relay once came up **on**; could not reproduce.

**Safety:** Original post includes UV-C and mains safety disclaimers — follow electrical and UV safety practices.

## Key Takeaways

- Sonoff RFR3 can be modded (RF chip resistor removal / reroute + wire) to act as a **433 MHz receive path** into Tasmota, similar in spirit to the RF Bridge + MQTT gateway approach.
- Prefer **`tasmota-sensors.bin`** for this use case; flash via UART if eWeLink/DIY mode is broken.
- Use **RF Recv (106)** on the GPIO you actually soldered (author used **GPIO1** instead of GPIO4 for easier soldering).
- Expect to adjust the **case** so internal routing does not jam the mechanical switch.
