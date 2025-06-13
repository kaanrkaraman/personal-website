export default function Footer() {
	return (
		<footer className="text-sm border-t border-gray-200 mt-10 py-6 bg-white">
			<div className="max-w-2xl mx-auto px-4 text-center text-gray-500">
				<div className="space-x-4">
					<a
						href="https://github.com/kaanrkaraman/personal-website"
						className="hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						view source
					</a>
					<a
						href="https://linkedin.com/in/kaanrkaraman"
						className="hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						linkedin
					</a>
					<a href="/rss.xml" className="hover:underline">
						rss
					</a>
					<a
						href="mailto:kaanrkaraman@proton.me"
						className="hover:underline"
					>
						email
					</a>
				</div>
				<p className="mt-2">© 2025 R. Kaan Karaman — MIT Licensed</p>
			</div>
		</footer>
	);
}