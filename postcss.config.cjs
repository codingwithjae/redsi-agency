/** @type {import('postcss-load-config').Config} */
const production = process.env.NODE_ENV === "production";

module.exports = {
	plugins: [
		require("postcss-nested"),
		production &&
			require("@fullhuman/postcss-purgecss").default({
				content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,mdx}"],
				safelist: [/^button--/, "button"],
				defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
			}),
	].filter(Boolean),
};
