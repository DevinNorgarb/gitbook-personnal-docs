# Contributing to Documentation

This repository contains personal documentation organized as a GitBook. Here's how to add or edit content.

## Structure

- **SUMMARY.md** – Defines the navigation structure. All pages must be listed here to appear in the table of contents.
- **Sections** – Top-level folders (e.g. `software-engineering/`, `obd2/`, `gis/`) each contain related documentation.
- **README.md** – Section and subsection overviews. Use these as landing pages.

## Adding a New Page

1. Create a new `.md` file in the appropriate section using **kebab-case** (e.g. `my-new-guide.md`).
2. Add frontmatter at the top:
   ```yaml
   ---
   title: My New Guide
   description: Optional one-line summary
   ---
   ```
3. Use a single H1 for the page title.
4. Add the page to `SUMMARY.md` under the correct section.

## Editing SUMMARY.md

Entries follow this format:

```markdown
* [Display Name](path/to/file.md)
  * [Child Page](path/to/child.md)
```

- Use the exact file path relative to the repository root.
- The display name in brackets is what appears in the navigation.
- Indentation (spaces) defines the hierarchy.

## Style Guide

See [.github/DOCUMENTATION-STYLE-GUIDE.md](.github/DOCUMENTATION-STYLE-GUIDE.md) for:

- Frontmatter conventions
- Heading structure
- File naming
- Link formatting
