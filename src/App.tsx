import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PostPage from "./pages/[slug]";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const routes = [{ path: "/", element: <Home /> }];

export default function App() {
	return (
		<div className="app-container flex flex-col min-h-screen bg-white text-gray-900">
			<Navbar />
			<main className="flex-grow px-4 py-6 max-w-3xl mx-auto w-full">
				<Routes>
					{routes.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
					{/* dynamic route for posts */}
					<Route path="/:slug" element={<PostPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
