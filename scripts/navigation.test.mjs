import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import {
  formatSidebarModule,
  mdPathToVitePressLink,
  parseSummaryMarkdownPaths,
  parseSummaryNavContext,
  parseSummaryToSidebarGroups,
} from "./lib/navigation.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixture = fs.readFileSync(
  path.join(__dirname, "fixtures/summary-navigation-sample.md"),
  "utf8",
);

test("mdPathToVitePressLink maps README and section README routes", () => {
  assert.equal(mdPathToVitePressLink("README.md"), "/");
  assert.equal(mdPathToVitePressLink("alpha/README.md"), "/alpha/README");
  assert.equal(mdPathToVitePressLink("alpha/child.md"), "/alpha/child");
});

test("parseSummaryToSidebarGroups handles sections, nesting, and dedupe", () => {
  const groups = parseSummaryToSidebarGroups(fixture);
  assert.equal(groups.length, 2);
  assert.equal(groups[0].text, "Alpha");
  assert.equal(groups[1].text, "Beta");
  assert.equal(groups[0].collapsed, true);
  assert.equal(groups[1].collapsed, true);

  const alpha = groups[0].items;
  assert.equal(alpha[0].link, "/");
  assert.equal(alpha[1].link, "/alpha/README");
  assert.equal(alpha[1].items.length, 1);
  assert.equal(alpha[1].items[0].link, "/alpha/child");
  assert.equal(alpha[1].collapsed, true);
  assert.equal(alpha.length, 2);
});

test("parseSummaryToSidebarGroups can omit collapse toggles", () => {
  const groups = parseSummaryToSidebarGroups(fixture, { collapse: false });
  assert.equal(groups[0].collapsed, undefined);
});

test("parseSummaryMarkdownPaths collects md links", () => {
  const paths = parseSummaryMarkdownPaths(fixture);
  assert.deepEqual([...paths].sort(), [
    "README.md",
    "alpha/README.md",
    "alpha/child.md",
    "beta/page.md",
  ]);
});

test("parseSummaryNavContext maps files to section titles", () => {
  const ctx = parseSummaryNavContext(fixture);
  assert.equal(ctx.get("alpha/child.md"), "Alpha");
  assert.equal(ctx.get("beta/page.md"), "Beta");
});

test("formatSidebarModule includes generation banner", () => {
  const out = formatSidebarModule(parseSummaryToSidebarGroups(fixture));
  assert.match(out, /^\/\/ AUTO-GENERATED/);
  assert.match(out, /export default \[/);
});
