# Example: Custom font family for article content

By default, this theme uses [Lato](https://fonts.google.com/specimen/Lato) for article content. This example shows how to use another font instead. For example, let's change article font family to [Merriweather](https://fonts.google.com/specimen/Merriweather).

Create `layouts/partials/head/custom.html` under your Hugo site folder, with following code:

```html
<style>
		/// Overwrite CSS variable
    :root {
        --article-font-family: "Merriweather", var(--base-font-family);
    }
</style>

<script>
		(function () {
		    const customFont = document.createElement('link');
		    customFont.href = "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap";
		
		    customFont.type = "text/css";
		    customFont.rel = "stylesheet";
		
		    document.head.appendChild(customFont);
		}());
</script>
```