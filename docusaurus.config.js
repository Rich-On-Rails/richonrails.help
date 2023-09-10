// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const defaultOptions = {
  editUrl: 'https://github.com/Rich-On-Rails/richonrails.help/tree/master/',
};

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Rich On Rails Docs',
  tagline: 'Rich On Rails Documentation',
  url: 'https://richonrails.help',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./docs-sidebar.js'),
          ...defaultOptions,
        },
        blog: {
          ...defaultOptions,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Rich On Rails Docs',        
        items: [
          {
            to: '/',
            // never render as active
            activeBaseRegex: '^$',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'welcome',
            label: 'Documentation',
            position: 'left',
          },                 
          {
            href: 'https://github.com/Rich-On-Rails',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/Rich-On-Rails',
          },
          {
            label: 'Website Source',
            href: 'https://github.com/Rich-On-Rails/richonrails.help',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rich On Rails. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['nginx'],
      },
    }),
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexPages: false,
        language: 'en',
        style: undefined,
        maxSearchResults: 8,
        lunr: {
          tokenizerSeparator: /[\s\-]+/,

          b: 0.75,

          k1: 1.2,

          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        },
      },
    ],
    ['@docusaurus/plugin-ideal-image', { disableInDev: false }],
  ],
};
