# 评论系统

评论系统是博客中非常重要的部分。它允许读者表达对文章的看法和想法，也允许作者与读者进行互动。

Stack 目前支持以下评论系统：

- [Cactus](https://cactus.chat/)
- [Comentario](https://comentario.app/)
- [Cusdis](https://cusdis.com/)
- [Disqus](https://disqus.com/)
- [DisqusJS](https://github.com/SukkaW/DisqusJS)
- [Giscus](https://giscus.app/)
- [Gitalk](https://github.com/gitalk/gitalk)
- [Remark42](https://remark42.com/)
- [Twikoo](https://twikoo.js.org/)
- [utterances](https://utteranc.es/)
- [Vssue](https://vssue.js.org/)
- [Waline](https://waline.js.org/)

每个评论系统都有自己的配置选项，放置在 `[Params.Comments.COMMENT_SYSTEM]` 部分。

例如，utterances 的配置选项放置在 `[Params.Comments.utterances]` 部分。

::: tip
完整的支持的配置选项列表可以在 [配置文件](https://github.com/CaiJimmy/hugo-theme-stack/blob/master/config/_default/params.toml) 中查阅。

有关每个配置选项含义的更多信息，请参阅对应评论系统的文档。
:::

::: warning
对于 Disqus，唯一的配置选项是 `disqusShortname`，它不在 `[Params.Comments.disqus]` 部分中。相反，它被放置在配置文件的根部分。
:::

## enabled

- 类型：`bool`
- 默认值：`false`

启用/禁用评论系统。

## provider

- 类型：`string`

评论系统提供商。可能的值包括：

- `cactus`
- `comentario`
- `cusdis`
- `disqus`
- `disqusjs`
- `giscus`
- `gitalk`
- `remark42`
- `twikoo`
- `utterances`
- `vssue`
- `waline`