---
title: SIM800L GPS/GPRS AT Commands
description: Quick reference for SIM800 series AT commands; full manual linked below.
---

# SIM800L GPS/GPRS AT Commands

Reference for the SIMCom **SIM800** GSM/GPRS module family (SIM800L breakout boards on Pi UART).

## Source

- [SIM800 Series AT Command Manual V1.09 (PDF)](../../.gitbook/assets/SIM800_Series_AT_Command_Manual_V1.09.pdf)

## Serial setup

- Default baud often **115200** (check your module; some ship at 9600)
- 8N1, no flow control typical
- Pi: enable UART, wire TX↔RX, common GND; use 3.3 V logic levels

## Essential commands

| Command | Purpose |
|---------|---------|
| `AT` | Ping — expect `OK` |
| `AT+CPIN?` | SIM PIN status |
| `AT+CSQ` | Signal quality (0–31, 99 = unknown) |
| `AT+CREG?` / `AT+CGREG?` | Network / GPRS registration |
| `AT+COPS?` | Operator |
| `AT+CGDCONT=1,"IP","<apn>"` | Define PDP context (set your carrier APN) |
| `AT+CGACT=1,1` | Activate PDP context |
| `AT+CIPSTART="TCP","host",port` | Open TCP (multi-connection firmware) |
| `AT+CIPSEND` | Send data on open socket |
| `AT+CIPSHUT` | Close connection / shut IP stack |

## SMS (selection)

| Command | Purpose |
|---------|---------|
| `AT+CMGF=1` | Text mode SMS |
| `AT+CMGS="<number>"` | Send SMS (terminate with Ctrl+Z) |
| `AT+CMGL="ALL"` | List messages |

## GPS (SIM800 variants with GNSS)

GNSS-capable modules add `AT+CGNSPWR`, `AT+CGNSINF`, etc. — see the PDF for your exact firmware.

## Tips

- Send `AT` after power-up until `OK` (module boot takes seconds)
- Use a adequate PSU — peak current spikes can brown out the Pi USB supply
- For full syntax, error codes, and USSD/voice commands, use the linked manual

## Related

- [Raspberry Pi](./README.md)
