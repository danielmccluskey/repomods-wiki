import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'R.E.P.O. Modding Wiki',
  description: 'A community-driven wiki for R.E.P.O. modding, guides, and resources.',
  lang: 'en-US',

  head: [
    ['link', { rel:'icon', href: "/favicon.ico" }],
    ['meta', { property: 'og:site_name', content: "R.E.P.O. Modding Wiki" }],
    ['meta', { property: 'og:image', content: "https://repomods.com/icon.png" }],
    ['meta', { name: 'theme-color', content: "#ffaf00" }]
  ],

  themeConfig: {
    logo: '/icon.png', // Place an image in docs/public/repo-logo.png
    search: {
      provider: 'local' 
    },
    nav: [
      { text: 'Home', link: '/' },
        { text: 'Get Started', link: '/overview.md' },
        { text: 'Developing Mods', link: '/develop.md' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Developing Mods', link: '/develop' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/danielmccluskey/repomods-wiki' },
      { icon: 'discord', link: 'https://discord.gg/vPJtKhYAFe' }
    ],
    editLink: {
      pattern: 'https://github.com/danielmccluskey/repomods-wiki/edit/main/docs/:path',
    },
    footer: {
      message: 'This wiki is community-driven and open-source.',
    }
  }
});
