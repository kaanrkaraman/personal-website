import fm from "front-matter";
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

const postFiles = import.meta.glob("../posts/*.md", { query: '?raw', import: 'default' });

export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = [];

  for (const path in postFiles) {
    const raw = await postFiles[path]();
    const { attributes, body } = fm<{
      title: string; date: string; slug: string; medium?: string; devto?: string; tags?: string[]
    }>(raw as string);

    posts.push({
      title: attributes.title,
      date: attributes.date,
      slug: attributes.slug,
      medium: attributes.medium,
      devto: attributes.devto,
      tags: attributes.tags ?? [],
      content: body,
    });
  }

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const all = await getAllPosts();
  const post = all.find((p) => p.slug === slug);
  if (!post) return undefined;

  const html = await marked(post.content);
  return { ...post, html };
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}