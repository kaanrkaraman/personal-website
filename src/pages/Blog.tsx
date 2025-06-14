type Post = {
	date: string;
	title: string;
	slug: string;
};

const posts: Post[] = [];

const hasPosts = posts.length > 0;

export default function Blog() {
	return (
		<section className="page-section">
			<h1 className="section-heading">Blog</h1>

			{hasPosts && (
				<p className="text-sm text-gray-700 leading-relaxed">
					This blog cross-posts my articles originally published on{" "}
					<a
						href="https://medium.com/@kaanrkaraman"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-gray-900"
					>
						Medium
					</a>. The content here is fully open, archive-stable, and served without third-party analytics or ads.
				</p>
			)}

			{hasPosts ? (
				<ul className="space-y-3">
					{posts.map((post) => (
						<li key={post.slug} className="text-sm">
							<span className="text-gray-500 mr-4">{post.date}</span>
							<span className="text-gray-800 hover:underline cursor-pointer">{post.title}</span>
						</li>
					))}
				</ul>
			) : (
				<p className="text-sm text-gray-500 italic mt-6">
					No blog posts here yet — but I’ve written several technical articles on{" "}
					<a
						href="https://medium.com/@kaanrkaraman"
						className="underline hover:text-gray-900"
						target="_blank"
						rel="noopener noreferrer"
					>
						Medium
					</a>{" "}
					covering deep learning, embedded systems, and applied ML. I’ll be cross-posting them here soon, so feel free to check back later.
				</p>
			)}
		</section>
	);
}