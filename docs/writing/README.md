# Writing

## Add featured image

Stack uses Hugo's [Page Bundle](https://gohugo.io/content-management/page-bundles/) feature to manage post images and optimize them.

The featured image of each post **must be placed under the same folder as the Markdown file**, as the example below:

```yaml
---
title: "Random post title"
description: "Lorem Ipsum"
date: "2020-08-10 01:00:00+0200"
slug: "example-post"
image: "cover.jpg"
---
```

`image` slug is used to specify the filename. The folder structure should be like:

```text
+---Example post
|       cover.jpg
|       example_image.jpg
|       index.md
```

Although the featured image could be an external image, it's not recommended because _Stack_ won't be able to get it's width and height attribute, nor generate appropriate thumbnails.

## Insert image

It's recommended to insert post images in the same way, using the Page Bundle feature. By doing that, Stack can generate different image sizes and delivery the appropriate one using `srcset` feature from HTML5.

Also, the image's width and height attributes are added automatically to avoid the layout shift.

_See `/layouts/_default/_markup/render-image.html`_

For example:

```text
+--- Example post
|       cover.jpg
|       Design-V1.jpg
|       Design-V2.jpg
|       index.md
```

`[index.md](http://index.md)` content:

```text
---
title: "Example post"
description: "Page description"
date: "2020-08-10 01:00:00+0200"
slug: "example-post"
image: "cover.jpg"
categories:
    - Blog
tags:
    - Hugo
    - Stack
---

![Image 1](Design-V1.jpg)   

![Image 2](Design-V2.jpg)
```

## Insert gallery

The synaxis used to insert gallery comes from [Typelog](https://blog.typlog.com/images). Thanks to [Lepture](https://lepture.com/) for permission.

```text
![Image 1](https://image/src1) ![Image 2](https://image/src2)
![Image 3](https://image/src3) ![Image 4](https://image/src4)
```

![](@assets/writing/image-gallery.jpg)

