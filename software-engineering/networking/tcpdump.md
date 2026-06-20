---
title: "TCPDump"
description: "Notes on TCPDump."
---

# TCPDump

`tcpdump` is a command-line packet analyzer for capturing and inspecting live network traffic. Essential for network troubleshooting and security work.

## Source

- [A tcpdump Tutorial with Examples](https://danielmiessler.com/study/tcpdump) — Daniel Miessler (150+ examples)
- [tcpdump tutorial (blog)](https://danielmiessler.com/blog/tcpdump)

![TCP/IP header diagram](https://danielmiessler.com/images/ip-header-2021-1024x505.png)

## Basic syntax

```bash
tcpdump [options] [expression]
```

- **options** — interface, verbosity, output format, write to file
- **expression** — filter by host, port, protocol, flags, etc.

## Common captures

```bash
# List interfaces
tcpdump -D

# All traffic on an interface
tcpdump -i eth0

# Host filter
tcpdump host 192.168.1.100

# Port filter
tcpdump port 80

# Combine filters
tcpdump host 192.168.1.100 and port 80
tcpdump src host 192.168.1.100 and \( port 80 or port 443 \)

# Protocol only
tcpdump tcp
tcpdump udp
```

## Useful options

| Flag | Purpose |
|------|---------|
| `-i eth0` | Select interface (`any` for all) |
| `-n` / `-nn` | No DNS / no port-name resolution |
| `-c 100` | Stop after N packets |
| `-v` / `-vv` / `-vvv` | More verbose output |
| `-s 0` | Full packet snap length |
| `-w file.pcap` | Write capture to file |
| `-r file.pcap` | Read capture from file |
| `-X` / `-XX` | Hex (+ ASCII) dump; `-XX` includes Ethernet header |
| `-tttt` | Human-readable timestamps |

## TCP flag filters

```bash
# SYN packets
tcpdump 'tcp[13] & 2 != 0'

# SYN or ACK
tcpdump 'tcp[tcpflags] & (tcp-syn|tcp-ack) != 0'
```

## Everyday combo

```bash
tcpdump -i eth0 -nnvvS -c 50 'tcp port 443'
```

Press **Ctrl+C** to stop a live capture.

## Related

- [Networking section](../README.md)
