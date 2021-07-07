# 开始创作

## 插入图片

在文章内插入图片推荐使用 Hugo 的 [Page Bundle](https://gohugo.io/content-management/page-bundles/) 功能：图片和文章处于同一目录下。主题使用此功能来读取图片长宽信息，避免布局抖动。同时会生成响应式图片，来优化加载速度。

举个例子，我博客的一篇文章的目录结构如下：

```text
+---测试文章
|       cover.jpg
|       Design-V1.jpg
|       Design-V2.jpg
|       index.md
```

`[index.md](<http://index.md>)` 文件内容：

```md
---
title: "测试文章"
description: "文章简介"
date: "2020-08-10 01:00:00+0200"
slug: "test-post"
image: "cover.jpg"
categories:
    - 博客
tags:
    - Hugo
    - Stack
---

![图片 1](Design-V1.jpg)   

![图片 2](Design-V2.jpg)
```

## 插入相册

主题借鉴了 [Typlog 的相册语法](https://blog.typlog.com/images)，在此感谢原作者 [Lepture](https://lepture.com/) 的授权。

```md
![图片 1](image1.jpg) ![图片 2](image2.jpg)
![图片 3](image3.jpg) ![图片 4](image4.jpg)
```

![](@assets/writing/image-gallery.jpg)
