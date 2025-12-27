export default function Footer() {
	return (
		<footer className="text-sm border-t border-gray-200 py-6 bg-white mt-10 transition-colors duration-300">
			<div className="max-w-2xl mx-auto px-4 text-center text-gray-500">
				<nav className="space-x-4" aria-label="Footer">
					<a
						href="https://github.com/kaanrkaraman/personal-website"
						className="hover:underline hover:text-gray-900"
						target="_blank"
						rel="noopener noreferrer"
					>
						view source ↗
					</a>
					<a href="/rss.xml" className="hover:underline hover:text-gray-900">
						rss
					</a>
				</nav>
				<p className="mt-2">© 2025 R. Kaan Karaman - MIT Licensed</p>
			</div>
		</footer>
	);
}
