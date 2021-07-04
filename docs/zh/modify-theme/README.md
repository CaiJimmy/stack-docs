# 修改主题

主题预留了 `layouts/partials/head/custom.html` 和 `layouts/partials/footer/custom.html` 这两个文件来自定义页面头部和底部的内容。

借助 [Hugo 的特性](https://gohugo.io/hugo-modules/theme-components/)可以很方便地覆盖主题的源码（类似 WordPress 的子主题功能）。

举个例子，假设我要在页面底部添加 Google Analytics 统计代码，可以这么做：

1. 在**站点根目录**新建 `layouts/partials/footer/custom.html` 文件
2. 在该文件内插入统计代码

这么做的好处就是**可以直接覆盖升级主题**，同时不丢失你对主题做的修改。

也可以用同样的方式**修改主题的 SCSS 文件**（存放在 `assets/scss` 文件夹下）。同理，需要在站点根目录下创建同名文件，Hugo 就会赋予它更高的优先级。

但在此之前，请查看主题提供的 CSS 变量，避免直接修改样式文件：

[CSS 变量](./css-variables.md)