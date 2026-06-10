import assert from "node:assert/strict";
import { test } from "node:test";
import {
  applySectionIndexUpdate,
  buildIndexSection,
  parseSummaryChildren,
  planSectionIndexUpdate,
  relativeMdLink,
  STUB_OVERVIEW_RE,
} from "./lib/section-index.mjs";

const SAMPLE_SUMMARY = `
- [Cryptocurrencies](software-engineering/cryptocurrencies/README.md)
  - [ccxt](software-engineering/cryptocurrencies/ccxt/README.md)
    - [manual](software-engineering/cryptocurrencies/ccxt/manual.md)
  - [Trading Bots](software-engineering/cryptocurrencies/trading-bots.md)
`;

test("parseSummaryChildren maps direct children", () => {
  const nodes = parseSummaryChildren(SAMPLE_SUMMARY);
  const crypto = nodes.get("software-engineering/cryptocurrencies/README.md");
  assert.equal(crypto.children.length, 2);
  assert.equal(crypto.children[0].text, "ccxt");
});

test("relativeMdLink resolves sibling and nested paths", () => {
  assert.equal(
    relativeMdLink(
      "software-engineering/cryptocurrencies/README.md",
      "software-engineering/cryptocurrencies/ccxt/README.md",
    ),
    "./ccxt/README.md",
  );
});

test("planSectionIndexUpdate replaces stub overviews", () => {
  const content = `# Cryptocurrencies

## Overview

This section contains documentation for **Cryptocurrencies**.
`;
  const plan = planSectionIndexUpdate({
    filePath: "software-engineering/cryptocurrencies/README.md",
    content,
    children: [{ text: "ccxt", file: "software-engineering/cryptocurrencies/ccxt/README.md" }],
  });
  assert.equal(plan.action, "replace");
  assert.ok(STUB_OVERVIEW_RE.test(content));
});

test("applySectionIndexUpdate writes child links", () => {
  const content = `# Cryptocurrencies

## Overview

This section contains documentation for **Cryptocurrencies**.
`;
  const next = applySectionIndexUpdate({
    filePath: "software-engineering/cryptocurrencies/README.md",
    content,
    children: [
      { text: "ccxt", file: "software-engineering/cryptocurrencies/ccxt/README.md" },
      { text: "Trading Bots", file: "software-engineering/cryptocurrencies/trading-bots.md" },
    ],
    action: "replace",
    readChild: () => "# ccxt\n\nExchange library notes.",
  });

  assert.match(next, /\[ccxt\]\(\.\/ccxt\/README\.md\)/);
  assert.match(next, /\[Trading Bots\]\(\.\/trading-bots\.md\)/);
  assert.doesNotMatch(next, STUB_OVERVIEW_RE);
});

test("buildIndexSection includes optional blurbs", () => {
  const section = buildIndexSection({
    title: "Cryptocurrencies",
    intro: "Crypto notes.",
    fromFile: "software-engineering/cryptocurrencies/README.md",
    children: [
      {
        text: "ccxt",
        file: "software-engineering/cryptocurrencies/ccxt/README.md",
        blurb: "Exchange library",
      },
    ],
  });
  assert.match(section, /— Exchange library/);
});
