import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inlineCssPlugin = {
	name: "inline-css",
	apply: "build",
	transformIndexHtml(html, { bundle }) {
		if (!bundle) return html;
		let newHtml = html;
		for (const name of Object.keys(bundle)) {
			if (name.endsWith(".css")) {
				const asset = bundle[name];
				newHtml = newHtml.replace(
					"</head>",
					`<style>${asset.source}</style></head>`,
				);
				delete bundle[name];
			}
		}
		return newHtml.replace(
			/<link rel="stylesheet" crossorigin href="\/assets\/index-.*?\.css">/g,
			"",
		);
	},
};

export default defineConfig({
	plugins: [react(), inlineCssPlugin],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "react-router-dom"],
				},
			},
		},
	},
	server: {
		host: true,
	},
});
