import { defineConfig } from "vitepress";

export default defineConfig({
  title: "R.E.P.O. Modding Wiki",
  description:
    "A community-driven wiki for R.E.P.O. modding, guides, and resources.",
  lang: "en-US",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:site_name", content: "R.E.P.O. Modding Wiki" }],
    [
      "meta",
      { property: "og:image", content: "https://repomods.com/icon.png" },
    ],
    ["meta", { name: "theme-color", content: "#ffaf00" }],
  ],

  themeConfig: {
    logo: "/icon.png", // Place an image in docs/public/repo-logo.png
    search: {
      provider: "local",
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
          { text: "Overview", link: "/overview" },
          { text: "Developing Mods", link: "/develop" },
        ],
      },
      {
        text: "REPOLib",
        items: [
          { text: "Overview", link: "/repolib/overview.md" },
          {
            text: "API",
            items: [
              {
                text: "Getting Started",
                link: "/repolib/api/start.md",
              },
              {
                text: "Bundle Loading",
                link: "/repolib/api/bundles.md",
              },
              {
                text: "Fixing Audio Mixer Groups",
                link: "/repolib/api/audio-mixer-groups.md",
              },
              {
                text: "Chat Commands",
                link: "/repolib/api/commands.md",
              },
              {
                text: "Enemies",
                link: "/repolib/api/enemies.md",
              },
              {
                text: "Shop Items",
                link: "/repolib/api/items.md",
              },
              {
                text: "Network Events",
                link: "/repolib/api/network-events.md",
              },
              {
                text: "Network Prefabs",
                link: "/repolib/api/network-prefabs.md",
              },
              {
                text: "Valuables",
                link: "/repolib/api/valuables.md",
              },
            ],
          },
          {
            text: "SDK",
            items: [
              {
                text: "Getting Started",
                link: "/repolib/sdk/start.md",
              },
              {
                text: "Custom Scripts",
                link: "/repolib/sdk/custom-scripts.md",
              },
              {
                text: "Enemies",
                link: "/repolib/sdk/enemies.md",
              },
              {
                text: "Levels",
                link: "/repolib/sdk/levels.md",
              },
              {
                text: "Shop Items",
                link: "/repolib/sdk/items.md",
              },
              {
                text: "Valuables",
                link: "/repolib/sdk/valuables.md",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/danielmccluskey/repomods-wiki",
      },
      { icon: "discord", link: "https://discord.gg/vPJtKhYAFe" },
    ],
    editLink: {
      pattern:
        "https://github.com/danielmccluskey/repomods-wiki/edit/main/docs/:path",
    },
    footer: {
      message: "This wiki is community-driven and open-source.",
    },
  },
});
