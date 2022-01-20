# Modify theme

It's recommended to modify this theme's source file **by overwriting them using Hugo's [theme components functionality](https://gohugo.io/hugo-modules/theme-components/)**, so the change you made remains after upgrading.

### Add custom code to `<head>` / end of page

There are two empty files reserved for custom code:

* `layouts/partials/head/custom.html`
* `layouts/partials/footer/custom.html`

To overwrite them:

1. Create `layout/partials/footer/custom.html` under your Hugo site folder
2. Insert custom code in that file.

### Edit theme style

You can modify this theme's stylesheet using the same method. Stylesheets file \(SCSS\) are places under `assets/scss` folder.

Before you do that, **check CSS variables** used by this theme. It's easier changing value of those variables, and less intrusive.

[CSS Variables](./css-variables.md)