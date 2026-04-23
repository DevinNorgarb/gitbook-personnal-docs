import { defineConfig } from "vitepress";
import sidebar from "./sidebar.generated.mjs";

export default defineConfig({
  title: "Personal Documentation",
  description:
    "Software engineering, hardware, robotics, GIS, and related notes.",
  // Custom domain serves docs at the root.
  base: "/",
  vite: {
    // GitBook assets: mixed-case extensions and extensionless filenames under .gitbook/assets/
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
    "docs-audit-report.md",
    "CONTRIBUTING.md",
    ".cursor/**",
    ".github/**",
    "book/**",
    "node_modules/**",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
  ],
  ignoreDeadLinks: true,
  cleanUrls: false,
  themeConfig: {
    // Local search fails on duplicate heading anchors in some imported pages (e.g. DJI docs).
    search: false,
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
