---
title: Drone Encrypted Flight Logs (Yuneec ST-16)
description: Imported note from https://jamiesharpe.co.uk/2024/11/19/drones-encrypted-flight-logs/
---

# Drone Encrypted Flight Logs (Yuneec ST-16)

## Source
- Type: webpage
- Origin: https://jamiesharpe.co.uk/2024/11/19/drones-encrypted-flight-logs/
- Imported: 2026-04-21

## Content
This post documents a practical reverse-engineering workflow for decrypting Yuneec ST-16 drone flight logs by recovering a static key from decompiled Android APKs.

### Scope and prerequisites
- Intended for digital investigations involving drone controllers.
- Requires baseline familiarity with Android/mobile forensics and reverse engineering.
- Suggested tooling:
  - APK decompiler (`jadx`)
  - Hex editor (for byte-level comparison)
  - Sample plaintext and encrypted flight logs

### Flight log locations
The post identifies two key directories on the controller:

- `/root/media/0/FlightEncryptLog` (encrypted logs)
- `/root/media/0/FlightLog` (plaintext logs)

It notes that encrypted logs can remain even when plaintext counterparts are deleted, which may be useful for recovery in investigations.

### Reverse engineering approach
1. Decompile relevant Yuneec APKs (`FlightMode.apk`, `droneFly.apk`, or `Yuneec-App-Release.apk`).
2. Search code for references such as `FlightEncryptLog`.
3. Locate crypto implementation in a `DES` class.
4. Extract static key material and cipher settings.

Key value observed:

```text
ksYuN2eC
```

Cipher configuration described:
- Algorithm/mode/padding: `DES/CBC/PKCS5Padding`
- Key: UTF-8 bytes of `ksYuN2eC`
- IV: UTF-8 bytes of `ksYuN2eC`

### Validation workflow
- Use a known plaintext segment (for example CSV headers common to flight logs).
- Re-encrypt with the recovered DES parameters.
- Compare resulting ciphertext bytes with encrypted log bytes in hex view.
- The post highlights near-match behavior with expected differences at padded tail bytes.

### Automation output
- Author provides a bulk decryption utility:
  - Repository: [DroneFlightLogDecryptor](https://github.com/JamieSharpe/DroneFlightLogDecryptor)
  - Purpose: batch decrypt flight log files for examiner workflows

### Investigation value
- Demonstrates how static-key client-side crypto can be recovered from app binaries.
- Provides a repeatable method from acquisition through key discovery to decryption validation.
- Emphasizes practical examiner use where only encrypted logs are available.

## Key Takeaways
- Decompiled mobile app code can expose hardcoded keys and decryption routines.
- Yuneec ST-16 flight logs are described as decryptable using recovered DES-CBC parameters.
- Encrypted logs may persist even when plaintext logs are removed, creating forensic opportunities.
- Reproducible decryption at scale is feasible with scripting or dedicated tooling.
