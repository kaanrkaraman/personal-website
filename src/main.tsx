import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Buffer } from 'buffer';
import App from "./App";
import "./index.css";

window.Buffer = Buffer;

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<App/>
	</StrictMode>,
);