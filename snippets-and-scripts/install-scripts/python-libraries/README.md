---
title: "Python + Libraries"
description: "Notes on Python + Libraries."
---

# Python + Libraries

Quick installs for **Poetry** (packaging/deps) and **pyenv** (multiple Python versions).

## Source

- [Poetry installer](https://python-poetry.org/docs/#installation)
- [pyenv automatic installer](https://github.com/pyenv/pyenv#automatic-installer)

## One-liners

```bash
curl -sSL https://install.python-poetry.org | python3 -
curl https://pyenv.run | bash
```

After pyenv install, add to `~/.bashrc` or `~/.zshrc`:

```bash
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

## In this section

- [poetry](./poetry/README.md) — dependency management and packaging
- [pyenv](./pyenv/README.md) — per-project Python versions

## Related

- [Install scripts](../README.md)
