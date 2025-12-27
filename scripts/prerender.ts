// @ts-check
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("../dist/client/index.html"), "utf-8");
const { render } = await import(toAbsolute("../dist/server/entry-server.js"));

const routesToPrerender = ["/"];

const postsDir = toAbsolute("../src/posts");
const postFiles = fs.readdirSync(postsDir);

postFiles.forEach((file) => {
	if (file.endsWith(".md")) {
		const slug = file.replace(/\.md$/, "");
		routesToPrerender.push(`/${slug}`);
	}
});

(async () => {
	for (const url of routesToPrerender) {
		const appHtml = await render(url);

		const html = template.replace(`<!--app-html-->`, appHtml);

		const filePath = `../dist/client${url === "/" ? "/index.html" : `${url}/index.html`}`;
		const absoluteFilePath = toAbsolute(filePath);

		const dir = path.dirname(absoluteFilePath);
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}

		fs.writeFileSync(absoluteFilePath, html);
		console.log("pre-rendered:", filePath);
	}
})();
