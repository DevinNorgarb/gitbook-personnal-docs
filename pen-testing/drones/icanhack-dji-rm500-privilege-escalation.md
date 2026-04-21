---
title: Local privilege escalation on DJI RM500 (djilink / Binder)
description: Imported note from https://icanhack.nl/blog/dji-rm500-privilege-escalation/
---

# Local privilege escalation on DJI RM500 (djilink / Binder)

## Source
- Type: webpage
- Origin: https://icanhack.nl/blog/dji-rm500-privilege-escalation/
- Imported: 2026-04-21

## Content
Blog by **Willem Melching** (Aug 6, 2023): escalating from default ADB `shell` to **`root`** on the **DJI RM500** smart controller (Android **7.1.2**, Linux **4.4.83**, **Rockchip RK3399**). Motivation in the post: bring up a USB–Ethernet adapter (`ifconfig eth0 up`) which requires root.

### Preconditions (as stated)
- Physical USB access to the remote.
- First ADB connection requires accepting the on-device authorization prompt.

### Attack surface triage
- **`netstat -tulpn`:** listeners in `4000X` range; process ownership hidden without root.
- **`ps`:** `/system/bin/djilink` and `/system/bin/dji_wms` run as **root**.
- **`service list | grep -i dji`:** Binder services including **`djilink`** (`djilink: [djilink]`).

### Obtaining filesystem / binary for analysis
- Full OS update tarball available (example path in post): DankDroneDownloader → `V01.01.0072_rm500_dji_system.bin` (actually a **tar**).
- Large `.pro.fw.sig` payload: ZIP after **480-byte** DJI-style header; `unzip` tolerates leading bytes.
- `system.new.dat` + `system.transfer.list` → reconstruct ext4 with **[sdat2img](https://github.com/xpirt/sdat2img)**, then mount `system.img` and extract `/bin/djilink`.

### Ghidra / `system()` review
- Many `system()` call sites; author focuses on factory-test style code.
- Vulnerable pattern: **`tinycap`** invoked via `system()` with a **user-controlled filename string** concatenated into the shell command without sanitization → **command injection** via `;`.

### Binder invocation
- Helper **`libdjilink.so`**: `BpLinkService::setMicStatus` packages **4× int32** + **String16** and calls transaction **1030** (`0x406`).
- Working start example from post:

```bash
service call djilink 1030 i32 1 i32 1 i32 1 i32 1 s16 "/sdcard/test.wav"
```

### Exploit command (injection in filename)
- Format string described: `tinycap %s -D 0 -d 0 -i %d -c %d -r 48000 -b 16 -t %d` with **128-char** total budget mentioned.
- Example payload:

```bash
service call djilink 1030 i32 1 i32 1 i32 2 i32 1 s16 ";whoami > /sdcard/whoami;"
```

- Verified effect in post: `/sdcard/whoami` contains **`root`**.

### Impact and disclosure context (author’s framing)
- **Local** privilege escalation: needs physical access + ADB pairing acceptance.
- RM500 discontinued; author notes **out of scope** for DJI bug bounty and discusses disclosure constraints.

## Key Takeaways
- Root-running **`djilink`** + Binder exposes high-value IPC; factory-test code paths are a classic weak spot.
- **`system()`** with attacker-influenced strings is sufficient for **`;`**-style shell injection even under tight length limits.
- Firmware packages can be unpacked offline to enable static analysis of privileged daemons without a rooted device first.
