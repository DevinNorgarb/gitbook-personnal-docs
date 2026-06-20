---
title: "SDKMan"
description: "Notes on SDKMan."
---

# SDKMan

**SDKMAN!** manages parallel versions of Java, Kotlin, Gradle, Maven, and many other SDKs on Unix shells.

## Source

- [sdkman.io](https://sdkman.io/)
- [Installation](https://sdkman.io/install)

## Install

```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk version
```

Works on macOS, Linux, and Windows via WSL (Bash or Zsh).

## Common commands

```bash
sdk list java
sdk install java 21.0.2-tem
sdk use java 21.0.2-tem
sdk default java 21.0.2-tem
```

## CI install

```bash
curl -s "https://get.sdkman.io?ci=true&rcupdate=false" | bash
```

## Related

- [Install scripts](./README.md)
