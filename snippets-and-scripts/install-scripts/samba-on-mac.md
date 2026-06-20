---
title: "Samba on Mac"
description: "Notes on Samba on Mac."
---

# Samba on Mac

Install **Samba 3** on macOS (legacy Lion-era gist; still useful pattern for Homebrew + launchd).

## Source

- [Gist: Install Samba 3 on OS X 10.7 Lion](https://gist.github.com/756445638/5c2095ce3eabf7f164a54be58c4ef375)
- Boot script: [kud/setup.sh](https://gist.github.com/kud/6587477/raw/d77d9430faf8a67cea1b500d83475c03a2aaaf51/setup.sh)

## Install Samba (Homebrew)

```bash
brew install samba
```

## Launch on boot

```bash
sudo sh -c "$(curl -s https://gist.github.com/kud/6587477/raw/d77d9430faf8a67cea1b500d83475c03a2aaaf51/setup.sh)"
```

Run each block separately. On modern macOS, prefer current Homebrew Samba docs and `brew services start samba` where appropriate — verify paths and `smb.conf` for your OS version.

## Related

- [Install scripts](../README.md)
