/**
 * Markdown parsing helpers for docs-audit (test surface).
 */

export function stripFrontmatter(s) {
  if (s.startsWith("---\n") || s.startsWith("---\r\n")) {
    const end = s.indexOf("\n---", 4);
    if (end !== -1) return s.slice(end + 4).trimStart();
  }
  return s;
}

export function stripCodeFences(s) {
  return s.replace(/```[\s\S]*?```/g, " ");
}

export function wordCount(s) {
  const t = stripCodeFences(stripFrontmatter(s))
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`\[\]()]/g, " ");
  return t.split(/\s+/).filter(Boolean).length;
}

/** Extract image and markdown link targets from content (excludes code fences) */
export function extractMdLinksAndImages(content) {
  const body = stripCodeFences(content);
  const images = [];
  const links = [];

  const imgRe = /!\[[^\]]*]\(\s*<?([^>)]+)>?\s*\)/g;
  let m;
  while ((m = imgRe.exec(body)) !== null) images.push(m[1].trim());

  const linkRe = /(?<!!)\[[^\]]*]\(\s*<?([^>)]+)>?\s*\)/g;
  while ((m = linkRe.exec(body)) !== null) links.push(m[1].trim());

  const hrefRe = /<img[^>]+src=["']([^"']+)["']/gi;
  while ((m = hrefRe.exec(body)) !== null) images.push(m[1].trim());

  return { images, links };
}

/** Resolve relative URL from a markdown file path; null for external/anchor */
export function resolveLocal(fromFile, url) {
  if (!url || /^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//"))
    return null;
  if (url.startsWith("#")) return null;
  const clean = url.split("#")[0].split("?")[0];
  if (!clean) return null;
  const normalizedFrom = fromFile.replace(/\\/g, "/");
  const base = normalizedFrom.includes("/")
    ? normalizedFrom.slice(0, normalizedFrom.lastIndexOf("/"))
    : "";
  const parts = [...(base ? base.split("/") : []), ...clean.split("/")];
  const stack = [];
  for (const part of parts) {
    if (!part || part === ".") continue;
    if (part === "..") stack.pop();
    else stack.push(part);
  }
  return stack.join("/");
}

/** Count flag occurrences across audit records for --fail-on gating */
export function countFlagViolations(records, failOn) {
  /** @type {Record<string, number>} */
  const counts = {};
  for (const flag of failOn) counts[flag] = 0;
  for (const r of records) {
    for (const f of r.flags ?? []) {
      if (failOn.includes(f)) counts[f] = (counts[f] ?? 0) + 1;
    }
  }
  return counts;
}
