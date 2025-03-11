import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'R.E.P.O. Modding Wiki',
  description: 'A community-driven wiki for R.E.P.O. modding, guides, and resources.',
  lang: 'en-US',

  themeConfig: {
    logo: '/repo-logo.png', // Place an image in docs/public/repo-logo.png

    nav: [
      { text: 'Home', link: '/' },
      
    ],

    sidebar: {
      '/getting-started/': [
        { text: 'Introduction', link: '/getting-started/' },
        { text: 'Installing Mods', link: '/getting-started/installing-mods' },
        { text: 'Creating Mods', link: '/getting-started/creating-mods' },
        { text: 'Modding Guidelines', link: '/getting-started/guidelines' }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/danielmccluskey/repomods-wiki' },
      { icon: 'discord', link: 'https://discord.gg/vPJtKhYAFe' }
    ],

    footer: {
      message: 'This wiki is community-driven and open-source.',
    }
  }
});
