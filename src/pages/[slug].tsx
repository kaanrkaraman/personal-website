import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug, formatDate } from "../lib/posts";
import type { Post } from "../lib/posts";

export default function PostPage() {
	const { slug } = useParams();
	const [post, setPost] = useState<Post | null>(null);

	useEffect(() => {
		if (slug) {
			(async () => {
				const p = await getPostBySlug(slug);
				if (p) setPost(p);
			})();
		}
	}, [slug]);

	if (!post) return <p>Loading...</p>;

	return (
		<article className="prose mx-auto py-10">
			<h1>{post.title}</h1>
			<div className="flex flex-wrap items-center gap-2 mb-4">
				<span className="text-sm text-gray-400">{formatDate(post.date)}</span>
				{post.tags?.map((tag) => (
					<span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
						{tag}
					</span>
				))}
			</div>

			<div className="mb-4 space-x-4">
				{post.medium && (
					<a
						href={post.medium}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm underline text-blue-600 hover:text-blue-800"
					>
						View on Medium
					</a>
				)}
				{post.devto && (
					<a
						href={post.devto}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm underline text-blue-600 hover:text-blue-800"
					>
						View on Dev.to
					</a>
				)}
			</div>

			<div dangerouslySetInnerHTML={{ __html: post.html! }} />
		</article>
	);
}
