---
title: poetry
description: Python dependency management and packaging with Poetry.
---

# poetry

**Poetry** declares project dependencies, locks reproducible installs, and builds distributable packages.

## Source

- [Poetry documentation](https://python-poetry.org/docs/)
- [python-poetry/poetry](https://github.com/python-poetry/poetry)

## Requirements

- Python **3.10+**
- Linux, macOS, or Windows

## Install

**Official installer (recommended):**

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

**pipx:**

```bash
pipx install poetry
```

Verify: `poetry --version`

Add Poetry to your `PATH` if needed (`~/.local/bin` on Linux, `~/Library/Application Support/pypoetry` on macOS).

## Quick start

```bash
poetry new my-app
cd my-app
poetry add requests
poetry install
poetry run python -m my_app
```

## CI tip

Pin versions in automation, e.g. `pipx install poetry==2.0.0` or `POETRY_VERSION=2.0.0` with the installer script.

## Related

- [Python libraries](../README.md)
- [pyenv](../pyenv/README.md)
