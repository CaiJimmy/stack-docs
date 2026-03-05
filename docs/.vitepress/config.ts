import { defineConfig } from 'vitepress'

export default defineConfig({
    lastUpdated: true,

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['script', { defer: "true", "data-website-id": "fa68cca8-9be3-457e-8322-7d0e8060e1d6", src: 'https://cloud.umami.is/script.js' }],
    ],

    markdown: {
        lineNumbers: true,
    },

    cleanUrls: true,

    locales: {
        root: {
            label: 'English',
            lang: 'en-US',
            title: 'Stack',
            description: 'Card-style Hugo theme designed for bloggers',
            themeConfig: {
                footer: {
                    message: "Documentation released under the MIT License, logo designed by Jimmy Cai, all rights reserved.",
                    copyright: "Copyright © 2020 - Present Jimmy Cai",
                },

                sidebar: sidebarGuide(),

                nav: [
                    { text: 'Guide', link: '/guide/' },
                    { text: 'Config', link: '/config/' },
                ],

                editLink: {
                    pattern: 'https://github.com/CaiJimmy/stack-docs/edit/master/docs/:path',
                    text: 'Edit this page on GitHub'
                },
            }
        },
        zh: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/zh/',
            title: 'Stack',
            description: '为博客设计的卡片式 Hugo 主题',
            themeConfig: {
                footer: {
                    message: "文档以 MIT 协议发布，徽标由 Jimmy Cai 设计，保留所有权利。",
                    copyright: "Copyright © 2020 - Present Jimmy Cai",
                },

                sidebar: sidebarGuideZh(),

                nav: [
                    { text: '指南', link: '/zh/guide/' },
                    { text: '配置', link: '/zh/config/' },
                ],

                editLink: {
                    pattern: 'https://github.com/CaiJimmy/stack-docs/edit/master/docs/:path',
                    text: '在 GitHub 上编辑此页'
                },

                outline: {
                    label: '本页目录'
                },

                docFooter: {
                    prev: '上一页',
                    next: '下一页'
                },

                lastUpdatedText: '最后更新于',

                returnToTopLabel: '回到顶部',
                sidebarMenuLabel: '菜单',
                darkModeSwitchLabel: '主题',
                lightModeSwitchTitle: '切换到浅色模式',
                darkModeSwitchTitle: '切换到深色模式'
            }
        }
    },

    themeConfig: {
        logo: '/logo.png',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/CaiJimmy/hugo-theme-stack' }
        ],

        outline: [2, 3],

        carbonAds: {
            code: 'CEAIE27W',
            placement: 'stackjimmycaicom'
        },

        search: {
            provider: 'algolia',
            options: {
                appId: '6OC1XCG4R5',
                apiKey: '7779946cc768ec3699123e60a91d0ddc',
                indexName: 'stack-jimmycai',
            }
        }
    },
});

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                { text: 'About Stack', link: '/guide/' },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Modify Theme', link: '/guide/modify-theme' },
                { text: 'Upgrade to v4', link: '/guide/upgrade-to-v4' }
            ]
        },
        {
            text: 'Writing',
            collapsed: false,
            items: [
                { text: 'Markdown', link: '/writing/markdown' },
                {
                    text: 'Frontmatter Configs', link: '/writing/frontmatter'
                },
                { text: 'Shortcodes', link: '/writing/shortcodes' },
            ]
        },
        {
            text: 'Config',
            collapsed: false,
            items: [
                {
                    text: 'Introduction',
                    link: '/config/'
                },
                {
                    text: 'Site Configs',
                    link: '/config/site'
                },
                {
                    text: 'i18n Configs',
                    link: '/config/i18n'
                },
                {
                    text: 'Custom Menu',
                    link: '/config/menu'
                },
                {
                    text: 'Custom Header / Footer',
                    link: '/config/header-footer'
                },
                {
                    text: 'Date Format',
                    link: '/config/date-format'
                },
                {
                    text: 'Sidebar',
                    link: '/config/sidebar'
                },
                {
                    text: 'Footer',
                    link: '/config/footer'
                },
                {
                    text: 'Article',
                    link: '/config/article'
                },
                {
                    text: 'Comments',
                    link: '/config/comments'
                },
                {
                    text: 'Widgets',
                    link: '/config/widgets'
                },
                {
                    text: 'Open Graph',
                    link: '/config/open-graph'
                },
                {
                    text: 'Color Scheme',
                    link: '/config/color-scheme'
                },
                {
                    text: 'Image Processing',
                    link: '/config/image-processing'
                },
                {
                    text: 'Cookies (GDPR)',
                    link: '/config/cookies'
                }
            ]
        },
    ]
}

function sidebarGuideZh() {
    return [
        {
            text: '指南',
            collapsed: false,
            items: [
                { text: '关于 Stack', link: '/zh/guide/' },
                { text: '开始使用', link: '/zh/guide/getting-started' },
                { text: '修改主题', link: '/zh/guide/modify-theme' },
                { text: '升级到 v4', link: '/zh/guide/upgrade-to-v4' }
            ]
        },
        {
            text: '写作',
            collapsed: false,
            items: [
                { text: 'Markdown', link: '/zh/writing/markdown' },
                {
                    text: 'Frontmatter 配置', link: '/zh/writing/frontmatter'
                },
                { text: '短代码', link: '/zh/writing/shortcodes' },
            ]
        },
        {
            text: '配置',
            collapsed: false,
            items: [
                {
                    text: '介绍',
                    link: '/zh/config/'
                },
                {
                    text: '站点配置',
                    link: '/zh/config/site'
                },
                {
                    text: 'i18n 配置',
                    link: '/zh/config/i18n'
                },
                {
                    text: '自定义菜单',
                    link: '/zh/config/menu'
                },
                {
                    text: '自定义页眉 / 页脚',
                    link: '/zh/config/header-footer'
                },
                {
                    text: '日期格式',
                    link: '/zh/config/date-format'
                },
                {
                    text: '侧边栏',
                    link: '/zh/config/sidebar'
                },
                {
                    text: '页脚',
                    link: '/zh/config/footer'
                },
                {
                    text: '文章',
                    link: '/zh/config/article'
                },
                {
                    text: '评论',
                    link: '/zh/config/comments'
                },
                {
                    text: '小部件',
                    link: '/zh/config/widgets'
                },
                {
                    text: 'Open Graph',
                    link: '/zh/config/open-graph'
                },
                {
                    text: '配色方案',
                    link: '/zh/config/color-scheme'
                },
                {
                    text: '图片处理',
                    link: '/zh/config/image-processing'
                },
                {
                    text: 'Cookies 隐私免责声明',
                    link: '/zh/config/cookies'
                }
            ]
        },
    ]
}