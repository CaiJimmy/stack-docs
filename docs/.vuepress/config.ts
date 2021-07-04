import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'Hugo theme Stack',
    description: 'Card-style Hugo theme designed for bloggers',

    themeConfig: {
        repo: 'CaiJimmy/hugo-theme-stack',
        docsRepo: 'CaiJimmy/stack-docs',
        editLinks: true,
        locales: {
            '/': {
                selectLanguageName: 'English',
                sidebar: [
                    {
                        text: "Introduction",
                        children: [
                            '/README.md',
                            '/getting-started.md'
                        ]
                    },
                    {
                        text: "Configuration",
                        children: [
                            '/configuration/README.md',
                            '/configuration/custom-menu.md'
                        ]
                    },
                    {
                        text: "Modify theme",
                        children: [
                            '/modify-theme/README.md',
                            '/modify-theme/css-variables.md',
                            '/modify-theme/example-custom-font-family.md',
                        ]
                    },
                    {
                        text: "Writing",
                        children: [
                            '/writing/README.md',
                            '/writing/supported-front-matter-fields.md',
                        ]
                    },
                    '/taxonomy/README.md',
                    '/i18n/README.md'
                ],
            },
            '/zh/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '语言',
                sidebar: [
                    {
                        text: "基础",
                        children: [
                            '/zh/README.md',
                            '/zh/getting-started.md'
                        ]
                    },
                    {
                        text: "配置主题",
                        children: [
                            '/zh/configuration/README.md',
                            '/zh/configuration/custom-menu.md'
                        ]
                    },
                    {
                        text: "修改主题",
                        children: [
                            '/zh/modify-theme/README.md',
                            '/zh/modify-theme/css-variables.md',
                            '/zh/modify-theme/example-custom-font-family.md',
                        ]
                    },
                    {
                        text: "开始创作",
                        children: [
                            '/zh/writing/README.md',
                            '/zh/writing/supported-front-matter-fields.md',
                        ]
                    },
                    '/zh/taxonomy/README.md',
                    '/zh/i18n/README.md'
                ],
            },
        },
    },

    locales: {
        '/': {
            lang: 'en-US',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Hugo 主题 Stack',

        },
    },
    alias: {
        '@assets': path.resolve(__dirname, '../assets')
    },

    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
    ]
})