# 自定义页眉 / 页脚

主题中预留了几个用于自定义 HTML 的文件，这对于添加自定义脚本、字体或样式表非常有用：

* `layouts/_partials/head/custom.html`：用于 `<head>` 中的自定义样式或脚本。
* `layouts/_partials/head/custom-font.html`：用于引入自定义字体 (`<link>` 标签)。
* `layouts/_partials/footer/custom.html`：用于在 `<body>` 末尾添加自定义脚本。

要覆盖它们：

1. 在您的 Hugo 站点文件夹下创建 `layouts/_partials/footer/custom.html`
2. 在该文件中插入自定义代码。

## 示例：为文章内容自定义字体系列

默认情况下，此主题使用 [Lato](https://fonts.google.com/specimen/Lato) 作为文章内容字体。此示例说明如何使用其他字体。例如，让我们将文章字体系列更改为 [Merriweather](https://fonts.google.com/specimen/Merriweather)。

首先，在您的 Hugo 站点文件夹下创建 `layouts/_partials/head/custom-font.html` 来引入新字体：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap">
```

接下来，创建 `layouts/_partials/head/custom.html` 来覆盖 CSS 变量：

```html
<style>
    /* 覆盖 CSS 变量 */
    :root {
        --article-font-family: "Merriweather", var(--base-font-family);
    }
</style>
```
