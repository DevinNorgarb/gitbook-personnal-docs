# Archived migration tooling

One-shot scripts used during the GitBook → VitePress migration. Kept for reference and recoverability in git; not wired to `package.json` or CI.

| Script | Purpose |
|--------|---------|
| [`convert_gitbook_tags.py`](convert_gitbook_tags.py) | Convert `{% embed %}`, hints, and proxy images to portable markdown |
| [`refactor_md.py`](refactor_md.py) | Bulk markdown hygiene (headings, fences, list markers) |

Run from repo root, for example:

```bash
python3 scripts/archive/convert_gitbook_tags.py
python3 scripts/archive/refactor_md.py
```

**Local mdBook output:** The gitignored `book/` directory (legacy mdBook HTML) is safe to delete locally. It is not published; VitePress excludes it via `srcExclude`.
