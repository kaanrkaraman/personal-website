import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const matter = require("gray-matter");

import { marked } from "marked";

export type Post = {
  title: string;
  date: string;
  slug: string;
  medium?: string;
  devto?: string;
  tags?: string[];
  content: string;
  html?: string;
};

const postFiles = import.meta.glob("../posts/*.md", { as: "raw" });

export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = [];

  for (const path in postFiles) {
    const raw = await postFiles[path]();
    const { data, content } = matter(raw);

    posts.push({
      title: data.title,
      date: data.date,
      slug: data.slug,
      medium: data.medium,
      devto: data.devto,
      tags: data.tags || [],
      content,
    });
  }

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const all = await getAllPosts();
  const post = all.find((p) => p.slug === slug);
  if (!post) return undefined;
  return { ...post, html: marked(post.content) };
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}