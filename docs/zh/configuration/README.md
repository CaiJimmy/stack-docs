# 配置主题

{% hint style="warning" %}
 主题最新的配置文件可以在 [exampleSite/config.yaml](https://github.com/CaiJimmy/hugo-theme-stack/blob/master/exampleSite/config.yaml) 找到，本页面的内容可能会过期。
{% endhint %}

Hugo 的配置存放在站点根目录的 `config.yaml` 里（其实也可以使用 TOML，但本主题默认提供的配置文件为 YAML 格式）

与主题相关的配置字段存放在 `params` 对象下：

## params
站点全局设置

### `mainSections`
在首页和归档页面输出来自指定 section 的文章。默认会输出放在 content/post 文件夹下的页面。  Ref: [Content Sections](https://gohugo.io/content-management/sections/)

### `featuredImageField`
特色图片使用的字段，默认为 image。不建议修改。

### `rssFullContent`
RSS 输出文章完整内容

### `favicon`
站点的图标

<!-- footer
## footer

### since
### customText
 -->

## dateFormat
日期格式设置。Go 的时间格式相比其他语言有很大的不同，请参考官方文档：[dateFormat](https://gohugo.io/functions/dateformat/)

### `published`
文章更新日期格式

### `lastUpdated`
文章发布日期格式

## Sidebar
与左侧边栏相关的设置。

### `avatar`
博主头像。

- `local` 是否在本地
- `src`
  - 本地: **请把图片放在站点根目录的 `assets/img` 文件夹下**。
    例如 `assets/img/avatar.png`, 并填入 `img/avatar.png`.
  - 外部: 头像地址

### `emoji`
头像底部的 Emoji。留空不显示。

### `subtitle`
站点介绍

## Article
文章页面相关的设置

### `math`
在所有文章启用 `KaTeX`

### `license`
文章协议设置，显示在页面底部

- `enabled`: 是否在所有文章底部显示协议信息。可以在文章的 `Front Matter` 插入 `license: false` 来单独关闭
- `default`: 默认文章协议。可以在文章的 `Front Matter` 插入 `license: "My custom licence"` 来单独关闭

## Comments
留言系统设置

### `enabled`
是否在文章底部默认显示评论系统

### `provider`
评论系统提供商。目前支持的有：

- `disqus`
  - 需要在 config.toml 添加 disqusShortname 字段。参考官方文档： [Configure Disqus](https://gohugo.io/content-management/comments/#configure-disqus)
- `remark42`
- `utterances`
- `vssue`

{% hint style="info" %}
可以在 `layouts/partials/comments/provider/` 下新建 `{provider}.html` 来添加更多评论系统的支持。
{% endhint %}

## **Widgets**
主页右侧边栏小部件设置

### `enabled`
数组，带有要显示的小部件的名字。目前可用的值：

- `search`: 搜索
- `archives`: 归档
- `tag-cloud`: 标签云

### `archives`
归档小部件设置

- `limit`: 输出条数限制

### `tagCloud`
标签云小部件设置

- `limit`: 输出条数限制

## Opengraph
[Open Graph](https://ogp.me/) 标签相关设置

### `twitter`

- `site`: 博主 Twitter 用户名 (不加 `@` )
- `card`: [Twitter Card 样式](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)，可选：summary / summary_large_image

## Default Image
默认特色图片设置

### opengraph
Open Graph 标签默认图片

- `enabled` ：是否启用
- `src`：图片地址
- `local`： 是否为本地图片。如果设置成 `true` ，主题会在站点根目录的 `assets` 文件夹下寻找 `src`

{% hint style="info" %}
**推荐把图片放在本地**，因为这样能被主题自动裁剪成合适的尺寸。
{% endhint %}
