# Shortcodes

## WHAT Shortcode

> [What a Shortcode is](https://gohugo.io/content-management/shortcodes/#what-a-shortcode-is)

`shortcode` 短码调用，您的博客文章中被“特殊标注”的内容将被 Hugo 识别转义。

通常，我们将 `shortcode` 技术用于“内联搜索”的应用场景，换句话说， `shortcode` 允许您在博客正文的任意位置嵌入可直接播放的媒体资源。

也许您曾留意到，Hugo文档中经常出现[类似的应用案例](https://gohugo.io/getting-started/installing/#install-hugo-with-brew)。

## WHY Shortcode

您可以通过 `shortcode` 在文章的合适位置插入媒体资源用以增加信息浓度，提高内容的可读性。

## HOW Shortcode

### Overview

> [Use Shortcode](https://gohugo.io/content-management/shortcodes/#use-shortcodes)

目前，本主题支持如下类型的媒体资源内嵌方案：<span id="overview"></span>

- [哔哩哔哩](#shortcode-bilibili)
- [腾讯视频](#shortcode-tencent)
- [本地视频](#shortcode-local-video)
- [YouTube](#shortcode-youtube)

#### 如何使用 `shortcode`？

1. 在您的 Markdown 文章中使用如下格式的短码调用, 其内容将被 Hugo 识别为`shortcode`

```markdown
{{< yourShortcodeName [params] >}}
```

2. 在您的站点根目录下新建`./layouts/shortcodes/yourShortcodeName.html`，编写这个文件

   此时，您在此`.html`中编辑的语法内容将被 Markdown 容器接受并被 Hugo kernel 渲染输出体现在您的调试网页上。

   若您暂时不知道该写点什么，不必担心，[Stack 默认提供了几种可靠的短码调用策略](#overview)。它们[默认存储](https://gohugo.io/templates/shortcode-templates/#file-location)在`./themes/hugo-theme-stack/layouts/shortcodes`中，根据 Hugo 模板调用的优先顺序，当您的根目录下的 `./layourts/shortcodes/`并不存在有效同名项目时，Stack 提供的默认策略将生效。

**注意**：一般情况下，`\{\{< >}}` 标识符（此处加了反斜杠防止转义）中的 `yourShortcodeName` 需要与您所指定的位于`./layouts/shortcodes/`或`./themes/hugo-theme-stack/layouts/shortcodes`下的`.html`文件名一致。

例如指定 `./layouts/shortcodes/youtube.html`，那么合适的调用格式是 `\{\{< youtube >}}`，后面的`[params]`则根据具体的`shortcode`接口内容而定。

#### 如何使用本主题提供的`demo-shortcode`？

例如实现业内插入 Youtube 来源视频，假设如下 Markdown 内容为您的一篇**博客正文**，若您正处于 `hugo server` 本地调试模式，可直接复制挪用。

```markdown
> 这是写在你的 Markdown 正文中的内容哟~

## Example 1

- 插入视频：`https://www.youtube.com/watch?v=MpYy6wwqxoo`
- 接受参数视频 ID,可能网址很长,但只需要复制**键值对** `v=` 后面的内容，如：

{{< youtube MpYy6wwqxoo >}}

## Example 2

- 插入视频：`https://www.youtube.com/watch?v=XRGquU0ZJok&list=PLvOO0btloRnsiqM72G4Uid0UWljikENlU&index=6`
- 这是一个分 p 的视频列表，链接中写明了这个`List ID` ,以及这个"视频"在列表中的位置序号 `index` 
但此处我们一次性只能插入一个视频，所以依然是只需要复制**键值对** `v=` 后面的内容，如：

{{< youtube XRGquU0ZJok >}}
```

### Shortcode API

上文简要介绍了如何在 Markdown 正文中利用 `shortcode` 内嵌 Youtube 视频资源，除此之外，[Hugo 内置](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes)了许多的`shortcode` 模板文件。

以下是本主题提供的其他短码调用模板，其标准引用方法如下文所示。

**注意**: 所有 Examples 标注的内容都是写在你要提交（post）的 blog-Markdown 中的。

---

<span id='shortcode-bilibili'></span>

#### Bilibili

在博文中插入**哔哩哔哩**媒体资源。

**Shortcode Format**

| Name | Value               | Description                           |
| ---- | ------------------- | ------------------------------------- |
| vid  | AV号 / BV号 [分P号] | 必填参数。(Type: String) 视频资源ID。 |

```
{{< bilibili AV号或BV号 >}}
{{< bilibili AV号或BV号 分P号 >}}
```

**Examples**

> 插入资源： `https://www.bilibili.com/video/BV1Sf4y1n75U?p=1`

在 bilibili 的规则中，同一 List 下的分 P 视频的 BV 号都是一样的，通过 `params: p` 来区分不同的视频

```html
{{< bilibili BV1Sf4y1n75U 1 >}}

{{< bilibili BV1Sf4y1n75U 2 >}}
```

> 插入资源：`https://www.bilibili.com/video/BV1Yv41147QK`

```html
<!-- just video src -->
{{< bilibili BV1Yv41147QK >}}
```

<span id='shortcode-tencent'></span>

#### Tencent 

在博文中插入**腾讯视频**媒体资源。

**Shortcode Format**

| Name | Value  | Description                           |
| ---- | ------ | ------------------------------------- |
| vid  | 视频id | 必填参数。(Type: String) 视频资源ID。 |

**Examples**

> 插入资源：`https://v.qq.com/x/page/b31563j0jqw.html`

```html
<!-- just video src -->
{{< tencent  b31563j0jqw >}}
```

<span id='shortcode-local-video'></span>

#### Video 

在博文中插入**本地(.mp4)视频文件**。

**Shortcode Format**

| Name     | Value          | Description                                     |
| :------- | :------------- | ----------------------------------------------- |
| src      | relative paths | 必填参数。(Type: String) 视频文件（相对）路径。 |
| autoplay | true / false   | 可选参数。(Type: String) 自动播放。             |
| poster   | relative paths | 可选参数。(Type: String) 视频封面（相对）路径。 |

**Examples**

> 插入资源：与本篇博文放置在同一目录下的视频文件`./video.mp4`

```html
<!-- just video src -->
{{< video "./video.mp4">}}

<!-- Other option -->
{{< video src="./video.mp4" autoplay="true" poster="./video-poster.png" >}}
```

<span id='shortcode-youtube'></span>

#### Youtube 

在博文中插入 **YouTube** 媒体资源。

**Shortcode Format**

| Name     | Value        | Description                                   |
| :------- | :----------- | --------------------------------------------- |
| id       | video id     | 必填参数。(Type: String) 视频ID。             |
| autoplay | true / false | 可选参数。(Type: String) 进入页面后自动播放。 |

**Examples**

> 插入资源：`https://www.youtube.com/watch?v=jflq6vNcZyA`

```html
<!-- just video src -->
{{< youtube jflq6vNcZyA >}}

<!-- Other option -->
{{< youtube id="jflq6vNcZyA" autoplay="true" >}}
```

