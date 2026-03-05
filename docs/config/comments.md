# Comments

Comment system is a very important part of a blog. It allows readers to express their opinions and thoughts about the post. It also allows the author to interact with the readers.

Stack currently supports the following comment systems:

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

Each comment system has its own configuration options placed under `[Params.comments.COMMENT_SYSTEM]` section. 

For example, utterances's configuration options are placed under `[Params.comments.utterances]` section.

::: tip
A full list of supported configuration options can be found in the [configuration](https://github.com/CaiJimmy/hugo-theme-stack/blob/master/config/_default/params.toml)

For more information about the meaning of each configuration option, please refer to the documentation of the comment system.
:::

::: warning
In case of Disqus, the only configuration option is `disqusShortname`, which is not available at `[Params.comments.disqus]` section. Instead, it is placed at the root section of your main Hugo configuration file (`hugo.toml`):

```toml
[services.disqus]
    shortname = "hugo-theme-stack"
```
:::

## enabled

- Type: `bool`
- Default: `false`

Enable / disable comment system.

## provider

- Type: `string`

Comment system provider. Possible values are:

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