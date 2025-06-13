import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ReadingList from "./pages/ReadingList.tsx";
import Projects from "./pages/Projects";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Router>
			<div className="app-container">
				<Navbar/>
				<main style={ { padding: "1rem", maxWidth: "800px", margin: "0 auto" } }>
					<Routes>
						<Route path="/" element={ <Home/> }/>
						<Route path="/blog" element={ <Blog/> }/>
						<Route path="/reading" element={ <ReadingList/> }/>
						<Route path="/projects" element={ <Projects/> }/>
					</Routes>
				</main>
				<Footer/>
			</div>
		</Router>
	);
}