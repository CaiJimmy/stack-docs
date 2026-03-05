# 文章

文章页面的配置。

`[Params.article]` 下的字段。

## headingAnchor

- 类型：`bool`
- 默认值：`false`

启用标题旁边的 # 锚点链接，仅在悬停时可见。

## math

- 类型：`bool`

通过 [KaTeX](https://katex.org/) 启用数学公式支持。可以被 Front Matter 字段 `math` 覆盖。

## toc

- 类型：`bool`

默认启用文章目录。可以被 Front Matter 字段 `toc` 覆盖。

::: warning
您仍需要将 [`toc` 小部件](widgets.md#toc) 添加到侧边栏以显示目录。
::: 


## readingTime

- 类型：`bool`
- 默认值：`true`

显示文章的预计阅读时间。

## license

- 类型：`map[string]:(bool|string)`

与许可证相关的配置。

### license.enabled

- 类型：`bool`
- 默认值：`false`

在文章下方显示许可证信息。

### license.default

- 类型：`string`
- 默认值：`Licensed under CC BY-NC-SA 4.0`

文章下方显示的默认许可证文本。可以被 Front Matter 字段 `license` 覆盖。

## mermaid

- 类型：`map`

与 Mermaid 图表相关的配置。这些图表仅在存在 mermaid 代码块时才会加载。

### mermaid.look

- 类型：`string`
- 默认值：`classic`
- 可用值：`classic`, `handDrawn`

图表的视觉样式。

### mermaid.lightTheme / mermaid.darkTheme

- 类型：`string`
- 默认值：`default` (浅色), `dark` (深色)

浅色模式和深色模式使用的图表主题。

### mermaid.securityLevel

- 类型：`string`
- 默认值：`strict`

安全级别。设为 `loose` 即可在图表上使用 HTML 标签。

## alertIcon

- 类型：`map`

自定义 Markdown Alert 中使用的图标。

### alertIcon.note

- 类型：`string`
- 默认值：`📝`

### alertIcon.tip

- 类型：`string`
- 默认值：`💡`

### alertIcon.important

- 类型：`string`
- 默认值：`📌`

### alertIcon.warning

- 类型：`string`
- 默认值：`⚠️`

### alertIcon.caution

- 类型：`string`
- 默认值：`🚨`
