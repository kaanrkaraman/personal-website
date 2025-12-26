import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, join } from "node:path";
import { globby } from "globby";
import fm from "front-matter";

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
			const { attributes } = fm<{
				title: string;
				slug: string;
				date: string;
				description?: string;
			}>(content);

			if (!attributes.title || !attributes.slug || !attributes.date) {
				console.warn(`Missing frontmatter in ${file}`);
				return null;
			}

			return `
  <item>
    <title>${attributes.title}</title>
    <link>${DOMAIN}/blog/${attributes.slug}</link>
    <pubDate>${new Date(attributes.date).toUTCString()}</pubDate>
    <description>${attributes.description || ""}</description>
  </item>`;
		})
		.filter(Boolean)
		.join("\n");

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>R. Kaan Karaman — Blog</title>
  <link>${DOMAIN}</link>
  <description>Technical writing, machine learning, robotics, and embedded systems.</description>
  ${items}
</channel>
</rss>`;

	writeFileSync(OUTPUT_FILE, rss.trim(), "utf-8");
	console.log(`✅ RSS feed generated: ${OUTPUT_FILE}`);
})();
