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
        collapsed: false,
        items: [
          { text: "Overview", link: "/overview" },
          { text: "Developing Mods", link: "/develop" },
        ],
      },
      {
        text: "REPOLib",
        collapsed: false,
        items: [
          { text: "Overview", link: "/repolib/overview.md" },
          {
            text: "API",
            collapsed: false,
            items: [
              { text: "Getting Started", link: "/repolib/api/start.md" },
              { text: "Bundle Loading", link: "/repolib/api/bundles.md" },
              { text: "Fixing Audio Mixer Groups", link: "/repolib/api/audio-mixer-groups.md" },
              { text: "Chat Commands", link: "/repolib/api/commands.md" },
              { text: "Enemies", link: "/repolib/api/enemies.md" },
              { text: "Shop Items", link: "/repolib/api/items.md" },
              { text: "Network Events", link: "/repolib/api/network-events.md" },
              { text: "Network Prefabs", link: "/repolib/api/network-prefabs.md" },
              { text: "Valuables", link: "/repolib/api/valuables.md" },
            ],
          },
          {
            text: "SDK",
            collapsed: false,
            items: [
              { text: "Getting Started", link: "/repolib/sdk/start.md" },
              { text: "Custom Scripts", link: "/repolib/sdk/custom-scripts.md" },
              { text: "Enemies", link: "/repolib/sdk/enemies.md" },
              { text: "Levels", link: "/repolib/sdk/levels.md" },
              { text: "Shop Items", link: "/repolib/sdk/items.md" },
              { text: "Valuables", link: "/repolib/sdk/valuables.md" },
            ],
          },
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