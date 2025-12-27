import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="border-b border-gray-200 py-4 bg-white transition-colors duration-300">
			<div className="max-w-2xl mx-auto px-4 flex justify-between items-center">
				<ul className="flex space-x-6 text-sm text-gray-800">
					<li>
						<Link to="/" className="hover:underline">
							home
						</Link>
					</li>
					<li>
						<Link to="/#publications" className="hover:underline">
							publications
						</Link>
					</li>
					<li>
						<Link to="/#experience" className="hover:underline">
							experience
						</Link>
					</li>
					<li>
						<Link to="/#projects" className="hover:underline">
							projects
						</Link>
					</li>
					<li>
						<Link to="/#blog" className="hover:underline">
							blog
						</Link>
					</li>
					<li>
						<Link to="/#reading" className="hover:underline">
							reading list
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
