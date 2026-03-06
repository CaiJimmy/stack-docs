# 自定义主页

Stack 主题默认会在主页以列表形式展示最近的文章。如果您想使用一个静态的页面作为主页，设置起来也非常简单。

## 设置单页主页

首先，在您的 `content` 根目录下创建一个 `_index.md` 文件：

```bash
hugo new content/_index.md
```

接着，在这个文件的 Frontmatter 中加上 `layout: single`。剩下的就和写普通文章一样了，您可以在文件里自由添加 Markdown 内容、短代码，甚至是特色图片。

`content/_index.md` 示例：

```yaml
---
title: "欢迎来到我的博客"
date: 2024-01-01
layout: single
---

这是我的自定义主页！在这里可以写任何我想展示的内容。
```

保存之后，主页就会直接展示这个单页的内容，而不再显示默认的文章列表了。
