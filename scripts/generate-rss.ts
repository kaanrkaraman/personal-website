import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, join } from "path";
import { globby } from "globby";

import * as matter from "gray-matter";

const DOMAIN = "https://kaans.land";
const POSTS_DIR = "src/posts";
const OUTPUT_DIR = resolve("public");
const OUTPUT_FILE = join(OUTPUT_DIR, "rss.xml");

(async () => {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = await globby(`${POSTS_DIR}/*.md`);

  const items = files
    .map((file) => {
      const content = readFileSync(file, "utf-8");
      const { data } = matter(content);

      if (!data.title || !data.slug || !data.date) {
        console.warn(`Missing frontmatter in ${file}`);
        return null;
      }

      return `
  <item>
    <title>${data.title}</title>
    <link>${DOMAIN}/blog/${data.slug}</link>
    <pubDate>${new Date(data.date).toUTCString()}</pubDate>
    <description>${data.description || ""}</description>
  </item>`;
    })
    .filter(Boolean);

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>R. Kaan Karaman — Blog</title>
  <link>${DOMAIN}</link>
  <description>Technical writing, machine learning, robotics, and embedded systems.</description>
  ${items.join("\n")}
</channel>
</rss>`;

  writeFileSync(OUTPUT_FILE, rss.trim(), "utf-8");
})();
