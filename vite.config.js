import { writeFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { robotsTxt, sitemapXml, jsonLdGraph } from "./src/seo.js";

function seoFilesPlugin() {
  return {
    name: "flexedu-seo-files",
    transformIndexHtml(html) {
      const ld = `<script type="application/ld+json">${JSON.stringify(jsonLdGraph())}</script>`;
      return html.replace("</head>", `    ${ld}\n  </head>`);
    },
    closeBundle() {
      writeFileSync("dist/robots.txt", robotsTxt());
      writeFileSync("dist/sitemap.xml", sitemapXml());
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoFilesPlugin()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
