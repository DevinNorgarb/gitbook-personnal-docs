import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import sidebar from "./sidebar.generated.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const navHidden = JSON.parse(
  fs.readFileSync(path.join(root, "nav.hidden.json"), "utf8"),
);

export default defineConfig({
  title: "Personal Documentation",
  description:
    "Software engineering, hardware, robotics, GIS, and related notes.",
  // Custom domain serves docs at the root.
  base: "/",
  vite: {
    // Legacy GitBook import store — see .github/ASSET-CONVENTION.md (prefer topic-local assets/)
    assetsInclude: [
      /\.gitbook\/assets\//,
      "**/*.PNG",
      "**/*.JPG",
      "**/*.JPEG",
      "**/*.GIF",
      "**/*.WEBP",
    ],
  },
  srcExclude: [
    "README.md",
    "SUMMARY.md",
    "DOCUMENTATION-REFACTORING-REPORT.md",
    "ARCHITECTURE-REVIEW.md",
    "docs-audit-report.md",
    "CONTRIBUTING.md",
    ".cursor/**",
    ".github/**",
    "scripts/fixtures/**",
    "book/**",
    "node_modules/**",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    ...navHidden,
  ],
  ignoreDeadLinks: true,
  cleanUrls: false,
  themeConfig: {
    search: {
      provider: "local",
    },
    sidebar,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/DevinNorgarb/gitbook-personnal-docs",
      },
    ],
    footer: {
      message: "Personal notes",
      copyright: "Built with VitePress",
    },
  },
});
