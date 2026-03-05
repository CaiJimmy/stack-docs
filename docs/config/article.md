# Article

Configuration for the article page.

Fields under `[Params.article]`.

## headingAnchor

- Type: `bool`
- Default: `false`

Enable # anchor links next to headings, visible only when hovered over.

## math

- Type: `bool`

Enable math support by [KaTeX](https://katex.org/). Can be overridden by front matter field `math`.

## toc

- Type: `bool`

Enable by default table of contents. Can be overridden by front matter field `toc`.

::: warning
You will still need to add [`toc` widget](widgets.md#toc) to the sidebar to display the table of contents.
::: 


## readingTime

- Type: `bool`
- Default: `true`

Display an estimated reading time for the article.

## license

- Type: `map[string]:(bool|string)`

Configurations related with license.

### license.enabled

- Type: `bool`
- Default: `false`

Display license information under the article.

### license.default

- Type: `string`
- Default: `Licensed under CC BY-NC-SA 4.0`

Default license text displayed under the article. Can be overridden by front matter field `license`.

## mermaid

- Type: `map`

Configurations related to Mermaid diagrams. Diagrams are only loaded when mermaid code blocks are present.

### mermaid.look

- Type: `string`
- Default: `classic`
- Available: `classic`, `handDrawn`

Visual style of the diagrams.

### mermaid.lightTheme / mermaid.darkTheme

- Type: `string`
- Default: `default` (light), `dark` (dark)

Themes used for light and dark modes.

### mermaid.securityLevel

- Type: `string`
- Default: `strict`

Security level. Set to `loose` to enable HTML labels.

## alertIcon

- Type: `map`

Customize the icons used for markdown alerts.

### alertIcon.note

- Type: `string`
- Default: `📝`

### alertIcon.tip

- Type: `string`
- Default: `💡`

### alertIcon.important

- Type: `string`
- Default: `📌`

### alertIcon.warning

- Type: `string`
- Default: `⚠️`

### alertIcon.caution

- Type: `string`
- Default: `🚨`
