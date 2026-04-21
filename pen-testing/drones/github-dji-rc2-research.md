---
title: DJI RC2 Reverse Engineering Research Notes
description: Imported note from https://github.com/whitelewi1-ctrl/dji-rc2-research
---

# DJI RC2 Reverse Engineering Research Notes

## Source
- Type: webpage
- Origin: https://github.com/whitelewi1-ctrl/dji-rc2-research
- Imported: 2026-04-21

## Content
This repository documents hands-on reverse engineering of the DJI RC2 controller, including boot chain behavior, ADB hardening, DUML protocol observations, root workflow, framework patching, and recovery attempts after a severe boot failure.

### Device profile and platform details
- Device: DJI RC2 (`rc331`, internal codename `KATMAI-IDP`)
- SoC/platform: Qualcomm QCS5430 (`lahaina` family), Android 11, kernel 5.4
- Build characteristics include `test-keys` signing and a custom DJI Android stack
- USB mode transitions expose multiple VID/PID states, including standard mode, ADB startup mode, and Qualcomm DIAG mode

### USB and protocol observations
- In normal USB mode, vendor bulk interfaces provide bidirectional communication used for DJI DUML traffic.
- ADB interface is present but consistently offline, even when system properties suggest ADB should be enabled.
- DIAG mode can be enabled via internal tooling and exposes Qualcomm diagnostic interfaces.
- DUML heartbeats and command responses were captured over USB bulk and selected Wi-Fi ports.

### Network services and telemetry channels
- The controller exposes multiple TCP services after Wi-Fi connect, including DUML-like and proprietary binary streams.
- High-rate sensor-style traffic (IMU-like payloads) is observed on one channel.
- Additional channels carry RC status/control messages and mixed protocol frames.

### Security model findings
- The notes describe layered DJI defenses:
  - Modified `adbd` behavior that refuses normal host connections
  - Interception of common bootloader entry paths
  - Runtime crypto checks tied to secure state
  - Network restrictions that limit common remote shell recovery paths
- The author reports many traditional bypass attempts failed (ADB key injection, wireless pairing, standard property toggles, and direct reboot flows).

### Root and system modification workflow
- Root was obtained using boot image extraction, Magisk patching, and flashing.
- System-level exploration used internal DJI tooling and later user-installed tools.
- Framework patching of `services.jar` was used to suppress DJI crypto warning overlays and bypass UI-side crypto checks.
- Zygisk/LSPosed compatibility issues and policy workarounds are documented.

### Brick incident and recovery analysis
- After installing an extracted DJI Fly package and triggering update behavior, device boot became stuck at logo stage.
- Software recovery channels reportedly failed:
  - ADB remained offline
  - DJI Assistant could not attach due to missing expected communication mode
  - Standard key combos and USB-based recovery scripts did not restore operability
- The write-up concludes software paths were exhausted and highlights physical recovery (test points / EDL) or vendor service as remaining options.

### Research artifacts
- Repository includes scripts for DUML probing, USB endpoint testing, startup capture automation, and traffic differential analysis.
- Notes also include observations on partitioning, DJI-specific binaries, hidden vendor apps, and firmware package structures.

## Key Takeaways
- DJI RC2 appears to implement strong practical hardening around ADB and boot/recovery pathways.
- DUML and related vendor transport channels remain primary protocol-level research surfaces.
- Root access and framework patching can change UX behavior but do not eliminate deeper secure-state checks.
- Firmware/app update operations on modified systems can lead to unrecoverable boot states without physical intervention.
