---
title: DUMLdore (DevinNorgarb fork) — firmware flashing tool
description: Imported note from https://github.com/DevinNorgarb/DUMLdore
---

# DUMLdore (DevinNorgarb fork) — firmware flashing tool

## Source
- Type: webpage
- Origin: https://github.com/DevinNorgarb/DUMLdore
- Imported: 2026-04-21

## Content
This repository is described as **DUMLdore firmware flashing tool v3.20** (Windows-oriented workflow for DJI `dji_system.bin`-style updates).

### Releases
- Releases are linked from the upstream project: [jezzab/DUMLdore releases](https://github.com/jezzab/DUMLdore/releases)

### Usage summary (from README)
- Close **DJI Assistant 2** before use.
- Connect USB from aircraft or RC to the PC, power on and wait for full boot.
- Run **DUMLdoreV3.exe**.

### UI actions described
| Action | Purpose |
|--------|---------|
| **LOAD** | Load a firmware file for flashing |
| **FLASH** | Upload firmware and start upgrade/downgrade |
| **PULL UPGRADE LOGS** | Download last upgrade log (tar/gzip) |
| **UNLOCK DEVICE** | Unlock devices grounded for missing a Sept 2017 firmware deadline |
| **ACTIVATE DEVICE** | Offline activation for *some* devices (Mavic Pro, P4, Spark); results may vary |
| **ADB ENABLE** | Enable ADB root shell quickly |
| **DOWNLOAD FIRMWARE** | Link to DankDroneDownloader |

### Compatibility (as listed)
- **Aircraft:** P4, P4 Pro, Mavic, Spark, I2, Mavic Air  
- **Remote:** Mavic  
- **Goggles:** DJI (generic)

### Operational note
- README recommends **at least 50% battery** before flashing.

### Related “DeejayeyeHackingClub” resources (README links)
- [dji.retroroms.info](http://dji.retroroms.info/) wiki-style reference  
- [fvantienen/dji_rev](https://github.com/fvantienen/dji_rev) — firmware RE tooling  
- [Bin4ry/deejayeye-modder](https://github.com/Bin4ry/deejayeye-modder) — APK tweaks  
- [hdnes/pyduml](https://github.com/hdnes/pyduml) — Assistant-less pushes / DUML-related workflows  
- [MAVProxyUser/P0VsRedHerring](https://github.com/MAVProxyUser/P0VsRedHerring) — historical exploit context (README description)  
- [MAVProxyUser/dji_system.bin](https://github.com/MAVProxyUser/dji_system.bin) — firmware archive by MD5  
- [MAVProxyUser/firm_cache](https://github.com/MAVProxyUser/firm_cache) — extracted firmware contents  
- [MAVProxyUser/DUMLrub](https://github.com/MAVProxyUser/DUMLrub) — Ruby DUML / cherry-picking  
- [jezzab/DUMLdore](https://github.com/jezzab/DUMLdore) — original DUMLdore repo  
- [MAVProxyUser/DJI_ftpd_aes_unscramble](https://github.com/MAVProxyUser/DJI_ftpd_aes_unscramble) — FTP AES unscramble for some products  
- [darksimpson/jdjitools](https://github.com/darksimpson/jdjitools) — Java DJI tools collection  

## Key Takeaways
- Fork documents the same Windows flashing workflow as classic DUMLdore, with releases still pointed at **jezzab** upstream.
- README is a practical checklist: Assistant off, USB, boot, then flash/load/logs/unlock paths.
- Treat flashing and unlock/activation features as high-risk operations tied to specific legacy device support.
