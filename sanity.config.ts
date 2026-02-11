import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"; // Sanity V3 deskTool or structureTool
import { schemaTypes } from "./src/lib/schema";

export default defineConfig({
	name: "default",
	title: "Redsi Studio",

	projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "",
	dataset: import.meta.env.VITE_SANITY_DATASET || "production",

	basePath: "/admin",

	plugins: [deskTool()],

	schema: {
		types: schemaTypes,
	},
});
