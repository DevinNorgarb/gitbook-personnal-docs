---
title: Trading Bots
description: Open-source crypto trading automation with Freqtrade.
---

# Trading Bots

**Freqtrade** is a Python crypto trading bot with backtesting, hyperopt, Telegram/WebUI control, and strategy plugins.

## Source

- [freqtrade.io](https://www.freqtrade.io/)
- [freqtrade/freqtrade](https://github.com/freqtrade/freqtrade)

## Features

| Feature | Description |
|---------|-------------|
| **Strategies** | Python + pandas — examples in strategy repo |
| **Backtest** | Historical candle replay |
| **Hyperopt** | ML-assisted parameter search (ROI, stops, entries) |
| **Dry-run** | Paper trading before live keys |
| **Exchanges** | Major spot and futures venues (see docs per exchange) |
| **Control** | Telegram bot or WebUI start/stop and PnL |

## Requirements (typical)

- Linux VPS: ~2 GB RAM, 2 vCPU, 1 GB disk
- Python 3.11+ or Docker (recommended)
- TA-Lib, git, virtualenv

## Safety

> Educational use only. Always **dry-run** first. Never risk capital you cannot lose.

```bash
# Quick start path — see official Docker install guide
docker compose run --rm freqtrade create-userdir --userdir user_data
```

## Related

- [Cryptocurrencies](./README.md)
