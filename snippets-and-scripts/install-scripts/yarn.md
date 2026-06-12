---
title: Yarn
description: Install Yarn classic via the official install script.
---

# Yarn

Install **Yarn** (classic 1.x line) using the official shell installer.

## Source

- [yarnpkg.com](https://classic.yarnpkg.com/en/docs/install)
- Install script: `https://yarnpkg.com/install.sh`

## Install

```bash
curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --rc
```

The `--rc` flag installs the release candidate channel; omit for latest stable:

```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

## Verify

```bash
yarn --version
```

## Note

For new Node projects, **Corepack** (`corepack enable`) ships Yarn 2+ with Node 16+. This page documents the classic installer preserved from the original stub.

## Related

- [Install scripts](./README.md)
