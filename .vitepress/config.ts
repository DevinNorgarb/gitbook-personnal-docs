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
    search: {
      provider: "local",
      options: {
        miniSearch: {
          // Use one indexed section per page to avoid duplicate anchor-id crashes
          // caused by imported docs with repeated heading anchors.
          _splitIntoSections: (_path, html) => {
            const text = html
              .replace(/<script[\s\S]*?<\/script>/gi, " ")
              .replace(/<style[\s\S]*?<\/style>/gi, " ")
              .replace(/<[^>]+>/g, " ")
              .replace(/\s+/g, " ")
              .trim();
            return [{ text, titles: [] }];
          },
        },
      },
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
