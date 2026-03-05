# 写作

Stack 使用 Hugo 的 **页面包 (page bundles)** 来管理您的内容。页面包是包含一个内容文件及其任何相关资源的目录。例如，一个博客文章的页面包可能如下所示：

```
content
└── post
    └── my-first-post
        ├── index.md
        ├── image1.png
        └── image2.png
```

这是管理内容的推荐方式。您可以在 [Hugo 官方文档](https://gohugo.io/content-management/page-bundles/) 中阅读有关页面包的更多信息。

::: info
完全支持插入外部图片。诸如图片画廊和图片缩放等功能也同样适用于外部图片。
:::

通过上述管理方式，您可以在内容中像这样插入图片：

```markdown
--- content/post/my-first-post/index.md ---
![Image 1](image1.png)
![Image 2](image2.png)
```

## 插入图片画廊

要插入图片画廊，您需要为该画廊创建一个页面包。例如：

```
content
└── gallery
    └── my-first-gallery
        ├── index.md
        ├── image1.png
        ├── image2.png
        └── image3.png
```

然后，您可以像这样在内容中插入画廊：

```markdown
--- content/gallery/my-first-gallery/index.md ---
![Image 1](image1.png) ![Image 2](image2.png)
![Image 3](image3.png)
```

这将在渲染时显示为两行，第一行有两张图片，第二行有一张图片。
