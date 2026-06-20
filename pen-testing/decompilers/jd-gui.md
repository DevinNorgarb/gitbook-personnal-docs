---
title: "jd-gui"
description: "Notes on jd-gui."
---

# jd-gui

**JD-GUI** displays Java source reconstructed from `.class` files. Part of the Java Decompiler project alongside JD-Eclipse and JD-Core.

## Source

- [java-decompiler.github.io](http://java-decompiler.github.io/)
- [JD-GUI releases](http://java-decompiler.github.io/)

## Main features

- Drag-and-drop `.class` files or JARs
- Browse methods and fields in reconstructed source
- Map stack trace line numbers back to decompiled code
- Supports Java 5+ features (generics, annotations, enums)
- Works with output from [dex2jar](./dex2jar.md)

## Related tools

| Tool | Role |
|------|------|
| **JD-GUI** | Standalone graphical viewer |
| **JD-Eclipse** | Eclipse plugin for debugging without sources |
| **JD-Core** | Library that reconstructs source from bytecode |

All released under GPLv3.

## Typical workflow

1. `d2j-dex2jar.sh app.apk` → `app-dex2jar.jar`
2. Open JAR in JD-GUI
3. Inspect classes, export source if needed
