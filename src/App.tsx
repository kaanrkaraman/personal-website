import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ReadingList from "./pages/ReadingList";
import Projects from "./pages/Projects";
import PostPage from "./pages/[slug]";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
  { path: "/reading", element: <ReadingList /> },
  { path: "/projects", element: <Projects /> },
];

export default function App() {
  return (
    <Router>
      <div className="app-container flex flex-col min-h-screen">
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
    </Router>
  );
}