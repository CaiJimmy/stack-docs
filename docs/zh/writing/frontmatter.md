# Frontmatter 配置

[[toc]]

## description

* 类型：`string`
* 适用于：单页和列表页

页面的描述。

## image

* 类型：`string`
* 适用于：单页和列表页

页面的特色图片。

## comments

* 类型：`bool`
* 适用于：单页

显示或隐藏页面的评论部分。

## license

* 类型：`string|bool`
* 适用于：单页
* 默认值：`.Site.Params.article.license.default`

页面的许可证。如果设置为 `false`，许可证部分将被隐藏。

## math

* 类型：`bool`
* 适用于：单页

启用或禁用 KaTeX 渲染。

## toc

* 类型：`bool`
* 适用于：单页
* 默认值：`.Site.Params.article.toc`

显示或隐藏页面的目录。

::: info
目录仅在页面至少包含一个标题时才会显示。
::: 

## style

* 类型：`map[string]string`
* 适用于：列表页

出现在文章页面中的分类术语徽章的附加 CSS 样式。

目前仅支持 `background`（徽章背景）和 `color`（文字颜色）。

## keywords

* 类型：`[]string`

页面的关键词。对 SEO 很有用。

## readingTime

* 类型：`bool`
* 默认值：`.Site.Params.article.readingTime`

显示或隐藏页面的阅读时间。
