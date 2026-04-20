---
title: DJI Pilot Android Application Security Analysis
description: Imported note from Synacktiv
---

# DJI Pilot Android Application Security Analysis

## Source
- Type: webpage
- Origin: https://www.synacktiv.com/en/publications/dji-pilot-android-application-security-analysis-1.html
- Author: The Team (Synacktiv)
- Imported: 2026-04-20

## Content
Synacktiv analyzed the Android `DJI Pilot` app (enterprise/professional drone segment) to compare it with earlier findings on `DJI GO 4`. The article reports similar security concerns, including forced update behavior and constraints around "offline" operation.

### Scope and setup
- Targeted versions included multiple `DJI Pilot` 1.8.0 builds and 1.7.2.
- Lab setup used a rooted Android 9 phone, controlled Wi-Fi, Burp interception, Frida scripts (unpacking and SSL pinning bypass), and JADX static analysis.

### Main findings
- The app uses the same SecNeo-based packing strategy seen in `DJI GO 4`:
  - encrypted DEX payloads,
  - runtime loading/decryption via `libDexHelper.so`,
  - similar string obfuscation patterns depending on version.
- A forced upgrade mechanism is present in DJI-distributed builds:
  - app checks update metadata via DJI backend endpoints,
  - response flags can force a blocking update flow,
  - researchers report being able to induce arbitrary app installation using the same approach as prior DJI GO 4 work.
- Some releases include a Weibo SDK component with `AppInstallCmdExecutor`, capable of downloading APKs.
- The write-up highlights HTTP usage in part of that SDK update flow and associated MITM risks.
- "Local Data Mode" reduces network usage but still blocks some sensitive mission workflows (for example, unlocking restricted zones) unless connectivity is re-enabled.

### Operational implication noted by Synacktiv
- Because unlock certificates are account-linked and require online workflows, sensitive operators may become more targetable.
- The article concludes that concerns found in consumer DJI software are also relevant for the professional `DJI Pilot` context.

## Key Takeaways
- Security mechanisms and risks in `DJI Pilot` appear close to those previously observed in `DJI GO 4`.
- Forced update pathways can materially increase exposure if they gate flight capability.
- "Offline" operating modes may still depend on online steps for restricted-airspace workflows.
- For sensitive deployments, software supply/update-channel trust is a primary risk factor.
