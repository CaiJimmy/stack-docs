# Custom Header / Footer

There are several files reserved for custom HTML in the theme, useful for adding custom scripts, fonts, or stylesheets:

* `layouts/_partials/head/custom.html`: For custom styles or scripts in `<head>`.
* `layouts/_partials/head/custom-font.html`: For custom font `<link>` tags.
* `layouts/_partials/footer/custom.html`: For custom scripts at the end of `<body>`.

To overwrite them:

1. Create `layouts/_partials/footer/custom.html` under your Hugo site folder
2. Insert custom code in that file.

## Example: Custom font family for article content

By default, this theme uses [Lato](https://fonts.google.com/specimen/Lato) for article content. This example shows how to use another font instead. For example, let's change article font family to [Merriweather](https://fonts.google.com/specimen/Merriweather).

First, create `layouts/_partials/head/custom-font.html` under your Hugo site folder to load the new font:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap">
```

Next, create `layouts/_partials/head/custom.html` to overwrite the CSS variable:

```html
<style>
    /* Overwrite CSS variable */
    :root {
        --article-font-family: "Merriweather", var(--base-font-family);
    }
</style>
```
