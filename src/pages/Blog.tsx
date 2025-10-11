import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import type { Post } from "../lib/posts";

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => setPosts(await getAllPosts()))();
  }, []);

  const hasPosts = posts.length > 0;

  return (
    <section className="page-section">
      <h1 className="section-heading">Blog</h1>

      {hasPosts && (
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          This blog cross-posts my articles originally published on{" "}
          <a
            href="https://medium.com/@rkaankaraman"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-900"
          >
            Medium
          </a>
          . The content here is open, ad-free, and stable.
        </p>
      )}

      {hasPosts ? (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug} className="text-sm">
              <span className="text-gray-500 mr-4">{post.date}</span>
              <Link
                to={`/${post.slug}`}
                className="text-gray-800 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 italic mt-6">
          No blog posts yet — check{" "}
          <a
            href="https://medium.com/@rkaankaraman"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-900"
          >
            Medium
          </a>{" "}
          for my latest writing.
        </p>
      )}
    </section>
  );
}