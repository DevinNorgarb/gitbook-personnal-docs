---
title: "dex2jar"
description: "Notes on dex2jar."
---

# dex2jar

Tools to work with Android `.dex` and Java `.class` files — essential for reverse-engineering Android APKs.

## Source

- [pxb1988/dex2jar](https://github.com/pxb1988/dex2jar)
- [Wiki](https://github.com/pxb1988/dex2jar/wiki) · [Releases](https://github.com/pxb1988/dex2jar/releases)

## Components

1. **dex-reader/writer** — read/write Dalvik Executable (`.dex`) files
2. **d2j-dex2jar** — convert `.dex` to `.class` files (zipped as JAR)
3. **smali/baksmali** — disassemble/assemble dex to smali
4. **d2j-decrypt-string** — decrypt obfuscated strings in dex

## Usage

```bash
./gradlew distZip
cd dex-tools/build/distributions
# unzip dex-tools-*-SNAPSHOT.zip
sh d2j-dex2jar.sh -f ~/path/to/app.apk
# → app-dex2jar.jar
```

Open the JAR in [jd-gui](./jd-gui.md) or a disassembler.

## License

Apache 2.0
