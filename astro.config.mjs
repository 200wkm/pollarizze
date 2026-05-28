import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
	site: "https://www.yourwebsite.com", // update me!
	integrations: [
		icon(),
		sitemap({
			filter: (page) => !page.includes("/admin"),
			changefreq: "weekly",
			priority: 0.7,
		}),
	],
	image: {
		layout: "constrained",
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Onest",
			cssVariable: "--font-body",
			fallbacks: ["sans-serif"],
			weights: [300, 400, 500, 600, 700, 800, 900],
			styles: ["normal"],
		},
		{
			provider: fontProviders.google(),
			name: "Rethink Sans",
			cssVariable: "--font-heading",
			fallbacks: ["sans-serif"],
			weights: [400, 500, 600, 700, 800],
			styles: ["normal", "italic"],
		},
	],
});
