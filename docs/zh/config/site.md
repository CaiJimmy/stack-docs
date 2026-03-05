# 站点设置

`[Params]` 下的字段：

## description

- 类型：`string`

站点描述。默认情况下，它会回退到 `.Params.Sidebar.Subtitle`。

## mainSections

- 类型：`[string]`
- 默认值：`["post"]`

放置在此章节/这些章节下的页面将显示在主页和归档页面上。

有关更多信息，请查看 Hugo 官方文档中的 [内容章节 (Content Sections)](https://gohugo.io/content-management/sections/)。

## rssFullContent

- 类型：`bool`
- 默认值：`true`

在 RSS 中输出页面的全文。

## favicon

- 类型：`string`

站点 favicon 路径。

例如，如果您想使用 `static/favicon.ico` 中的 favicon，请将 `favicon` 设置为 `/favicon.ico`。
