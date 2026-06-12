---
title: Install oh-my-zsh
description: One-line installer for Oh My Zsh framework.
---

# Install oh-my-zsh

**Oh My Zsh** is a community framework for managing Zsh configuration, themes, and plugins.

## Source

- [ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)
- [Install guide](https://github.com/ohmyzsh/ohmyzsh#basic-installation)

## Install

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

The installer backs up existing `~/.zshrc` and can set Zsh as your default shell.

## After install

- Edit `~/.zshrc` to set `ZSH_THEME` and `plugins=(git …)`
- Reload: `source ~/.zshrc`

## Uninstall

Follow the [uninstall section](https://github.com/ohmyzsh/ohmyzsh#uninstalling-oh-my-zsh) in the repo README.

## Related

- [Install scripts](./README.md)
