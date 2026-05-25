import { execSync } from "child_process";
import { defineConfig } from "vitepress";

let shortHash = "dev";
let fullHash = "";
try {
  shortHash = execSync("git rev-parse --short HEAD").toString().trim();
  fullHash = execSync("git rev-parse HEAD").toString().trim();
} catch (e) {}

const sharedThemeConfig = {
  // @ts-ignore
  buildShortHash: shortHash,
  buildFullHash: fullHash,
  logo: "/icon.png",
  outline: "deep",
  search: {
    provider: "local",
    options: { detailedView: true },
  },
  socialLinks: [
    { icon: "github", link: "https://github.com/danielmccluskey/repomods-wiki" },
    { icon: "discord", link: "https://discord.gg/vPJtKhYAFe" },
  ],
  editLink: {
    pattern: "https://github.com/danielmccluskey/repomods-wiki/edit/main/docs/:path",
  },
};

export default defineConfig({
  title: "R.E.P.O. Modding Wiki",
  description: "A community-driven wiki for R.E.P.O. modding, guides, and resources.",
  appearance: true,

  head: [
	["link", { rel: "icon", href: "/favicon.ico" }],
	["meta", { property: "og:site_name", content: "R.E.P.O. Modding Wiki" }],
	["meta", { property: "og:image", content: "https://repomods.com/icon.png" }],
  ],

  locales: {
	root: {
	  label: "English",
	  lang: "en-US",
	  themeConfig: {
		...sharedThemeConfig,
		nav: [
		  { text: "Home", link: "/en/" },
		  { text: "Get Started", link: "/en/overview.md" },
		  { text: "Developing Mods", link: "/en/develop.md" },
		],
		sidebar: [
		  {
			text: "Get Started",
			items: [
			  { text: "Overview", link: "/en/overview.md" },
			  { text: "Developing Mods", link: "/en/develop.md" },
			  { text: "HarmonyX Project Setup", link: "/en/harmonyx.md" },
			  { text: "Unity Project Setup", link: "/en/unity.md" },
			],
		  },
		  {
			text: "Modding APIs",
			items: [
			  {
				text: "REPOLib",
				link: "/en/apis/repolib/overview.md",
				collapsed: true,
				items: [
				  { text: "Overview", link: "/en/apis/repolib/overview.md" },
				  {
					text: "API",
					link: "/en/apis/repolib/api/start.md",
					collapsed: false,
					items: [
					  { text: "Getting Started", link: "/en/apis/repolib/api/start.md" },
					  { text: "Bundle Loading", link: "/en/apis/repolib/api/bundles.md" },
					  { text: "Fixing Audio Mixer Groups", link: "/en/apis/repolib/api/audio-mixer-groups.md" },
					  { text: "Debug Commands", link: "/en/apis/repolib/api/commands.md" },
					  { text: "Cosmetics", link: "/en/apis/repolib/api/cosmetics.md" },
					  { text: "Enemies", link: "/en/apis/repolib/api/enemies.md" },
					  { text: "Shop Items", link: "/en/apis/repolib/api/items.md" },
					  { text: "Network Events", link: "/en/apis/repolib/api/network-events.md" },
					  { text: "Network Prefabs", link: "/en/apis/repolib/api/network-prefabs.md" },
					  { text: "Valuables", link: "/en/apis/repolib/api/valuables.md" },
					],
				  },
				  {
					text: "SDK",
					link: "/en/apis/repolib/sdk/start.md",
					collapsed: false,
					items: [
					  { text: "Getting Started", link: "/en/apis/repolib/sdk/start.md" },
					  { text: "Custom Scripts", link: "/en/apis/repolib/sdk/custom-scripts.md" },
					  { text: "Cosmetics", link: "/en/apis/repolib/sdk/cosmetics.md" },
					  { text: "Enemies", link: "/en/apis/repolib/sdk/enemies.md" },
					  { text: "Levels", link: "/en/apis/repolib/sdk/levels.md" },
					  { text: "Shop Items", link: "/en/apis/repolib/sdk/items.md" },
					  { text: "Valuables", link: "/en/apis/repolib/sdk/valuables.md" },
					],
				  },
				],
			  },
			  {
				text: "MenuLib",
				link: "/en/apis/menulib/overview.md",
				collapsed: true,
				items: [
				  { text: "Overview", link: "/en/apis/menulib/overview.md" },
				],
			  },
			],
		  },
		  {
			text: "Thunderstore",
			items: [
			  { text: "Overview", link: "/en/thunderstore/overview.md" },
			  { text: "Publish your Mod", link: "/en/thunderstore/publish.md" },
			],
		  },
		],
	  },
	},
	zh: {
	  label: "简体中文",
	  lang: "zh-CN",
	  themeConfig: {
		...sharedThemeConfig,
		nav: [
		  { text: "首页", link: "/zh/" },
		  { text: "快速开始", link: "/zh/overview.md" },
		  { text: "开发 Mod", link: "/zh/develop.md" },
		],
		sidebar: [
		  {
			text: "快速开始",
			items: [
			  { text: "概述", link: "/zh/overview.md" },
			  { text: "开发 Mod", link: "/zh/develop.md" },
			  { text: "HarmonyX 项目设置", link: "/zh/harmonyx.md" },
			  { text: "Unity 项目设置", link: "/zh/unity.md" },
			],
		  },
		  {
			text: "Modding API",
			items: [
			  {
				text: "REPOLib",
				link: "/zh/apis/repolib/overview.md",
				collapsed: true,
				items: [
				  { text: "概述", link: "/zh/apis/repolib/overview.md" },
				  {
					text: "API",
					link: "/zh/apis/repolib/api/start.md",
					collapsed: false,
					items: [
					  { text: "快速开始", link: "/zh/apis/repolib/api/start.md" },
					  { text: "Bundle 加载", link: "/zh/apis/repolib/api/bundles.md" },
					  { text: "修复 Audio Mixer Groups", link: "/zh/apis/repolib/api/audio-mixer-groups.md" },
					  { text: "调试命令", link: "/zh/apis/repolib/api/commands.md" },
					  { text: "装饰品", link: "/zh/apis/repolib/api/cosmetics.md" },
					  { text: "敌人", link: "/zh/apis/repolib/api/enemies.md" },
					  { text: "商店物品", link: "/zh/apis/repolib/api/items.md" },
					  { text: "网络事件", link: "/zh/apis/repolib/api/network-events.md" },
					  { text: "网络预制体", link: "/zh/apis/repolib/api/network-prefabs.md" },
					  { text: "贵重物品", link: "/zh/apis/repolib/api/valuables.md" },
					],
				  },
				  {
					text: "SDK",
					link: "/zh/apis/repolib/sdk/start.md",
					collapsed: false,
					items: [
					  { text: "快速开始", link: "/zh/apis/repolib/sdk/start.md" },
					  { text: "自定义脚本", link: "/zh/apis/repolib/sdk/custom-scripts.md" },
					  { text: "装饰品", link: "/zh/apis/repolib/sdk/cosmetics.md" },
					  { text: "敌人", link: "/zh/apis/repolib/sdk/enemies.md" },
					  { text: "关卡", link: "/zh/apis/repolib/sdk/levels.md" },
					  { text: "商店物品", link: "/zh/apis/repolib/sdk/items.md" },
					  { text: "贵重物品", link: "/zh/apis/repolib/sdk/valuables.md" },
					],
				  },
				],
			  },
			  {
				text: "MenuLib",
				link: "/zh/apis/menulib/overview.md",
				collapsed: true,
				items: [
				  { text: "概述", link: "/zh/apis/menulib/overview.md" },
				],
			  },
			],
		  },
		  {
			text: "Thunderstore",
			items: [
			  { text: "概述", link: "/zh/thunderstore/overview.md" },
			  { text: "发布你的 Mod", link: "/zh/thunderstore/publish.md" },
			],
		  },
		],
	  },
	},
  },
});
