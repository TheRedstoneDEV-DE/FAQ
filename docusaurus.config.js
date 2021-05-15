module.exports = {
  title: 'FAQ Robin-IT',
  tagline: 'Hier findest du alles, was du wissen musst!',
  url: 'https://faq.robin-it.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://files.robin-it.de/logo_quadrat.png',
  organizationName: 'Robin-IT',
  projectName: 'FAQ',
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    localeConfigs: {
      de: {
        label: 'Deutsch',
      },
    },
  },
  plugins: [
    [
        require.resolve('@cmfcmf/docusaurus-search-local'),
      {
          indexPages: true,
          language: "de",
      }
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
          'mobile',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'FAQ Robin-IT',
      logo: {
        alt: 'Robin-IT Logo',
        src: 'https://files.robin-it.de/logo_quadrat.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'FAQ',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://www.robin-it.de',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://dash.robin-it.de',
          label: 'Dashboard',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Socialmedia',
          items: [
            {
              label: 'Discord',
              href: 'https://dc.robin-it.de',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/robin_it_2020',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/robin_it_2020/',
            },
          ],
        },
        {
          title: 'Rechtliches',
          items: [
            {
              label: 'Impressum',
              href: 'https://dash.robin-it.de/impressum',
            },
            {
              label: 'Datenschutz',
              href: 'https://dash.robin-it.de/datenschutz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by Robin-IT`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
              "https://github.com/RobinDev03/Robin-IT-FAQ/edit/master/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        }//,
        //theme: {
        //  customCss: require.resolve("./src/css/custom.css")
        //}
      }
    ]
  ],
};
