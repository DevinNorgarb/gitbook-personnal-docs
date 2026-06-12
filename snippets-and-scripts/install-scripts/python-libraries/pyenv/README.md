---
title: pyenv
description: Install and configure pyenv for multiple Python versions.
---

# pyenv

**pyenv** lets you install and switch Python versions per project without conflicting system Pythons.

## Source

- [pyenv/pyenv](https://github.com/pyenv/pyenv)
- [Automatic installer](https://github.com/pyenv/pyenv#automatic-installer)

## Install

```bash
curl https://pyenv.run | bash
```

## Shell setup

Add to `~/.bashrc` or `~/.zshrc`:

```bash
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

Restart the shell or `source` your rc file.

## Common commands

```bash
pyenv install 3.12.0
pyenv global 3.12.0
pyenv local 3.11.6    # per-directory .python-version
pyenv versions
```

Build deps (Debian/Ubuntu): `sudo apt install -y build-essential libssl-dev zlib1g-dev …` — see pyenv wiki for your OS.

## Related

- [Python + Libraries](../README.md)
- [poetry](../poetry/README.md)
