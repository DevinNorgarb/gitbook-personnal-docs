---
title: "Rust"
description: "Notes on Rust."
---

# Rust

Install the Rust toolchain (rustc, cargo, rustup) with the official rustup script.

## Source

- [rustup.rs](https://rustup.rs/)
- [rust-lang/rustup](https://github.com/rust-lang/rustup)

## Install

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Follow prompts (default stable toolchain is fine for most work). Restart the shell or `source "$HOME/.cargo/env"`.

## Verify

```bash
rustc --version
cargo --version
```

## Useful rustup commands

```bash
rustup update          # upgrade toolchains
rustup target add wasm32-unknown-unknown
rustup component add clippy rustfmt
```

## Related

- [Install scripts](./README.md)
