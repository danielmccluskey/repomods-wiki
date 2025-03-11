import { defineConfig } from 'vitepress'
import { createTitle, normalize } from "vitepress/dist/client/shared.js";
import { transformerNotationMap } from '@shikijs/transformers';

const HOSTNAME = "https://repomods.com";

function href(path = "") {
  return new URL(normalize(path), HOSTNAME).href;
}

const xmlRemoveDiffTransformer = transformerNotationMap({
  classMap: { 
    'rm': 'diff remove'
  },
  classActivePre: 'has-diff',
  matchAlgorithm: 'v3',
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "R.E.P.O. Modding Wiki",
  description: "A modding wiki for R.E.P.O.",
  head: [
    ['link', { rel:'icon', href: "/favicon.ico" }],
    ['meta', { property: 'og:site_name', content: "R.E.P.O. Modding Wiki" }],
    ['meta', { property: 'og:image', content: "https://repomods.com/logo.png" }],
    ['meta', { name: 'theme-color', content: "#ff3600" }]
  ],
  transformPageData(pageData, ctx) {
    let pageDescription = pageData.frontmatter?.description;
    const pageHref = href(pageData.relativePath);
    const pageTitle = createTitle(ctx.siteConfig.site, pageData);

    if (!pageDescription) {
      pageDescription = ctx.siteConfig.site?.description;

      // If no page-specific description and not homepage, prepend the site title to the description
      if (pageDescription && pageHref !== href()) {
        pageDescription = [ctx.siteConfig.site?.title, pageDescription]
            .filter((v) => Boolean(v))
            .join(": ");
      }
    }

    pageData.frontmatter.head ??= [];

    pageData.frontmatter.head.push(
        [
          "meta",
          {
            name: "og:title",
            content: pageTitle,
          },
        ],
        [
          "meta",
          {
            property: "og:url",
            content: pageHref,
          },
        ],
        [
          "meta",
          {
            name: "twitter:title",
            content: pageTitle,
          },
        ],
    );

    if (pageDescription) {
      pageData.frontmatter.head.push(
          [
            "meta",
            {
              name: "og:description",
              content: pageDescription,
            },
          ],
          [
            "meta",
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
      );
    }
  },
  sitemap: {
    hostname: HOSTNAME
  },
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local' // TODO: Set up algolia for better-performing searches
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Discord',
        items: [
          {
            items: [
              { text: 'Modding Discord', link: 'https://discord.gg/vPJtKhYAFe' },
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/': [

      ],
    },
    externalLinkIcon: true,
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/danielmccluskey/repomods-wiki' },
      { icon: 'discord', link: 'https://discord.gg/vPJtKhYAFe' },
    ],
    editLink: {
      pattern: 'https://github.com/danielmccluskey/repomods-wiki/edit/main/docs/:path',
    },
    docFooter: {
      prev: false,
      next: false,
    }
  },
  lastUpdated: true,
  vite: {
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ],
    },
  },
  markdown: {
    languageAlias: { 'il': 'shellscript' },
    codeTransformers: [
      xmlRemoveDiffTransformer
    ]
  }
})