import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { globby } from "globby";

import * as matter from "gray-matter";

(async () => {
  const files = await globby("src/posts/*.md");
  const items = files.map((file) => {
    const content = readFileSync(file, "utf-8");
    const { data } = matter(content);

    return `
      <item>
        <title>${data.title}</title>
        <link>https://yourdomain.com/blog/${data.slug}</link>
        <pubDate>${new Date(data.date).toUTCString()}</pubDate>
        <description>${data.description || ""}</description>
      </item>`;
  });

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>My Blog</title>
  <link>https://yourdomain.com</link>
  <description>Developer musings</description>
  ${items.join("\n")}
</channel>
</rss>`;

  writeFileSync(resolve("public/rss.xml"), rss);
})();
