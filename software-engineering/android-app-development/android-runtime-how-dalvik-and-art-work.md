---
title: Android Runtime - How Dalvik and ART Work
description: Imported note from ProAndroidDev
---

# Android Runtime - How Dalvik and ART Work

## Source
- Type: webpage
- Origin: https://proandroiddev.com/android-runtime-how-dalvik-and-art-work-6e57cf1c50e5
- Author: Paulina Sadowska
- Imported: 2026-04-20

## Content
This article explains how Android Runtime translates app bytecode (`.dex`) into CPU-executable machine code, and how compilation strategies evolved from Dalvik to ART to balance performance, RAM usage, and install/update cost.

### Runtime basics
- APKs include `.dex` bytecode for app/library logic.
- Android Runtime compiles this bytecode to machine code at runtime or ahead of runtime depending on strategy.
- Runtime behavior also includes memory management and garbage collection (not the focus of this article).

### Dalvik era (up to Android K)
- Dalvik emphasized low RAM usage on early devices.
- It relied on JIT (Just-In-Time) compilation: compiling code during execution.
- Benefit: lower memory pressure from not precompiling everything.
- Trade-off: slower runtime performance due to on-the-fly compilation.

### ART in Android L
- ART introduced AOT (Ahead-Of-Time) compilation.
- Code is compiled before execution, improving app runtime speed significantly.
- Trade-offs:
  - higher storage/RAM cost,
  - slower app installation and system updates due to broad precompilation.

### Android N: profile-guided hybrid model
- Android Runtime reintroduced JIT plus profile-guided compilation.
- Frequently executed ("hot") methods are identified and precompiled/cached.
- This hybrid approach improves hot-path performance while avoiding full precompile overhead.
- Precompilation is scheduled during idle/charging windows to reduce user impact.

### Android P: cloud/common profiles
- Google introduced cloud-distributed common profiles for new installs.
- A "common core profile" precompiles methods/classes commonly used by most users.
- Device-specific profiling still continues after install for user-specific optimization.

## Key Takeaways
- Dalvik prioritized RAM efficiency with JIT; ART initially prioritized execution speed with AOT.
- Modern Android Runtime uses a hybrid JIT + profile-guided model for better real-world efficiency.
- Cloud/common profiles improve first-run experience by pre-optimizing frequently used code paths.
- Runtime compilation strategy is a major factor in startup speed, install cost, and overall UX.
