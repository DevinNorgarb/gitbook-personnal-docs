---
title: Linux wireless-regdb (db.txt) — where limits look highest
description: Notes from parsing sforshee wireless-regdb db.txt for maximum EIRP by country and band class
---

# Linux wireless-regdb (`db.txt`) — maximum EIRP highlights

## Source

- Type: text (analysis of regulatory database format; not a full webpage ingest)
- Origin: [wireless-regdb `db.txt` on kernel.org](https://git.kernel.org/pub/scm/linux/kernel/git/sforshee/wireless-regdb.git/plain/db.txt?id=HEAD) (upstream canonical path); local parse used a saved copy when automated fetch hit bot protection (Anubis).
- Imported: 2026-05-13
- Images: none in the source material for this note (numeric rules only).

## Content

### How `db.txt` encodes power

In the Linux wireless regulatory database text file:

- A parenthesized value **without** a unit after the frequency tuple, e.g. `(30)`, is **dBm** (EIRP).
- Values like `(100 mW)` or `(4000 mW)` are explicit **milliwatt** EIRP limits.

Rules are per **country** ISO code (`country XX:`) and **frequency range**; the kernel applies the domain that matches the configured regulatory country. Comparing “who has the biggest number” only makes sense **for the same band** (2.4 GHz, 5 GHz, 6 GHz, 60 GHz / 802.11ad, etc.), because a 60 GHz rule is not comparable to home 2.4/5 GHz Wi‑Fi in practice.

### Highest single rule in the analyzed snapshot (any band)

| Order | Country | Approx. peak | Band / comment |
|------:|---------|----------------|----------------|
| 1 | **CN** | **44 dBm** (~25.1 W) | 60 GHz segment `59400–63720 MHz` (802.11ad-style numbering in file) |
| 2 | **AU** | **20 000 mW** (20 W) | Very wide 60 GHz span `57000–71000 MHz`, marked `NO-OUTDOOR` in upstream rules |

So for **raw maximum EIRP attached to one line** in that file, **China (CN)** edges Australia on the mid 60 GHz slice (44 dBm vs 20 W), while **Australia** still carries an extremely high explicit **20 W** rule on a broad 60 GHz allocation.

### Sub‑7 GHz only (2.4 / 5 / ~6 GHz — “ordinary” Wi‑Fi context)

Excluding 57–71 GHz style rules:

- **Australia (AU)** stands out with **4000 mW (36 dBm)** on **2.4 GHz** (`2400–2483.5`) and again on **5.7–5.85 GHz** (`5730–5850`).
- **Panama (PA)** and **Hong Kong (HK)** show **36 dBm** on several sub‑7 GHz entries in the same database snapshot (not necessarily 4 W on 2.4 GHz like AU).

Many FCC-style domains cap **2.4 GHz** around **30 dBm (1 W)** for typical rules; **30 dBm** on 5 GHz U‑NII appears widely (US, and many `DFS-FCC` countries).

### Compliance (non‑negotiable)

Devices must operate under the regulations **where the transmitter is physically located**. Selecting a country code or reg domain only to chase a higher line in `db.txt` is **not** a substitute for local law and can cause harmful interference.

### Fetch / reproducibility

- Direct scripted fetch of `git.kernel.org` may return an Anubis challenge page instead of `db.txt`; cloning the [wireless-regdb](https://git.kernel.org/pub/scm/linux/kernel/git/sforshee/wireless-regdb.git/) repository or downloading `db.txt` in a browser is often more reliable for humans.
- Re-run analysis by parsing lines matching `country XX:` blocks and tab-indented `(...), (...)` rules; convert bare integers to mW via \(10^{\mathrm{dBm}/10}\) for ranking.

## Key takeaways

- **“Best country for maximum power” is undefined until you name the band** (2.4 vs 5 vs 6 vs 60 GHz); global maxima in `db.txt` are often **60 GHz** rules, not laptop Wi‑Fi.
- For **classic Wi‑Fi bands** in this snapshot, **AU** had the strongest **explicit mW** limits on 2.4 GHz and 5.7–5.85 GHz.
- For **one-line peak including 60 GHz**, **CN** had the highest **dBm** value (44 dBm) on a mid 60 GHz range; **AU** had **20 W** on a wide 60 GHz rule.
- Always follow **local** regulatory domain; `db.txt` is a reference encoding of national rules, not permission to operate.
