import { execSync } from "child_process";
import { defineConfig } from "vitepress";

let shortHash = "dev";
let fullHash = "";
try {
  shortHash = execSync("git rev-parse --short HEAD").toString().trim();
  fullHash = execSync("git rev-parse HEAD").toString().trim();
} catch (e) {}

export default defineConfig({
  title: "R.E.P.O. Modding Wiki",
  description: "A community-driven wiki for R.E.P.O. modding, guides, and resources.",
  lang: "en-US",
  appearance: true,

  head: [
	["link", { rel: "icon", href: "/favicon.ico" }],
	["meta", { property: "og:site_name", content: "R.E.P.O. Modding Wiki" }],
	["meta", { property: "og:image", content: "https://repomods.com/icon.png" }],
  ],

  themeConfig: {

	// @ts-ignore
	buildShortHash: shortHash,
	buildFullHash: fullHash,

	logo: "/icon.png",
	outline: "deep",
	search: {
	  provider: "local",
	  options: { detailedView: true },
	},
	nav: [
	  { text: "Home", link: "/" },
	  { text: "Get Started", link: "/overview.md" },
	  { text: "Developing Mods", link: "/develop.md" },
	],
	sidebar: [
	  {
		text: "Get Started",
		items: [
		  { text: "Overview", link: "/overview.md" },
		  { text: "Developing Mods", link: "/develop.md" },
		  { text: "HarmonyX Project Setup", link: "/harmonyx.md" },
		  { text: "Unity Project Setup", link: "/unity.md" },
		],
	  },
	  {
		text: "Modding APIs",
		items: [
		  {
			text: "REPOLib",
			link: "/apis/repolib/overview.md",
			collapsed: true,
			items: [
			  { text: "Overview", link: "/apis/repolib/overview.md" },
			  {
				text: "API",
				link: "/apis/repolib/api/start.md",
				collapsed: false,
				items: [
				  { text: "Getting Started", link: "/apis/repolib/api/start.md" },
				  { text: "Bundle Loading", link: "/apis/repolib/api/bundles.md" },
				  { text: "Fixing Audio Mixer Groups", link: "/apis/repolib/api/audio-mixer-groups.md" },
				  { text: "Debug Commands", link: "/apis/repolib/api/commands.md" },
				  { text: "Enemies", link: "/apis/repolib/api/enemies.md" },
				  { text: "Shop Items", link: "/apis/repolib/api/items.md" },
				  { text: "Network Events", link: "/apis/repolib/api/network-events.md" },
				  { text: "Network Prefabs", link: "/apis/repolib/api/network-prefabs.md" },
				  { text: "Valuables", link: "/apis/repolib/api/valuables.md" },
				],
			  },
			  {
				text: "SDK",
				link: "/apis/repolib/sdk/start.md",
				collapsed: false,
				items: [
				  { text: "Getting Started", link: "/apis/repolib/sdk/start.md" },
				  { text: "Custom Scripts", link: "/apis/repolib/sdk/custom-scripts.md" },
				  { text: "Enemies", link: "/apis/repolib/sdk/enemies.md" },
				  { text: "Levels", link: "/apis/repolib/sdk/levels.md" },
				  { text: "Shop Items", link: "/apis/repolib/sdk/items.md" },
				  { text: "Valuables", link: "/apis/repolib/sdk/valuables.md" },
				],
			  },
			],
		  },
		  {
			text: "MenuLib",
			link: "/apis/menulib/overview.md",
			collapsed: true,
			items: [
			  { text: "Overview", link: "/apis/menulib/overview.md" },
			],
		  },
		],
	  },
	  {
		text: "Thunderstore",
		items: [
		  { text: "Overview", link: "/thunderstore/overview.md" },
		  { text: "Publish your Mod", link: "/thunderstore/publish.md" },
		],
	  },
	],
	socialLinks: [
	  { icon: "github", link: "https://github.com/danielmccluskey/repomods-wiki" },
	  { icon: "discord", link: "https://discord.gg/vPJtKhYAFe" },
	],
	editLink: {
	  pattern: "https://github.com/danielmccluskey/repomods-wiki/edit/main/docs/:path",
	},
  },
});