# 给分类 / 标签添加图片和简介

![](@assets/taxonomy/taxonomy.jpg)

在 `content/categories/分类名` 下新建文件 `_index.md`，内容如下：

```md
---
title: "分类名"
description: "简介 Blablabla"
image: "nichijou.jpg"
---
```

如果是标签，就在 `content/tags/标签名` 下创建 `_index.md`。

和文章特色图片一样，**分类的特色图片也需要存放在同一文件夹**下才能被主题正确处理。

> 参考：[https://github.com/CaiJimmy/hugo-theme-stack/tree/master/exampleSite/content/categories/Test](https://github.com/CaiJimmy/hugo-theme-stack/tree/master/exampleSite/content/categories/Test)

官方文档：[_Add custom metadata a Taxonomy or Term_](https://gohugo.io/content-management/taxonomies/#add-custom-metadata-a-taxonomy-or-term)
