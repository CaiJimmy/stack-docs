# 自定义字体

主题使用了以下五个 [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 来定义字体：

```css
:root{
	--sys-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Droid Sans", "Helvetica Neue";
	--zh-font-family: "PingFang SC", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei";

	--base-font-family: "Lato", var(--sys-font-family), var(--zh-font-family);
	--code-font-family: Menlo, Monaco, Consolas, "Courier New";

	--article-font-family: var(--base-font-family);
}
```

默认[加载](https://github.com/CaiJimmy/hugo-theme-stack/blob/master/layouts/partials/footer/style.html)了 Lato 这个英文字体。中文字体的定义在 `--zh-font-family` 这个变量里。

可以在页面头部 / 底部插入 `<style>` 标签来覆盖这些变量，参考「[修改主题](https://www.notion.so/jimmycai/18902ecb5832477abc534d9a27b97af9)」

## 例子：给文章加上思源宋体

_我博客文章使用的是_[_思源宋体_](https://fonts.google.com/specimen/Noto+Serif+SC)_（没有内置在主题里）。_

在站点根目录新建文件 `layouts/partials/head/custom.html`， 内容如下：

```html
<style>
    :root {
        --article-font-family: "Noto Serif SC", var(--base-font-family);
    }
</style>

<script>
		(function () {
		    const customFont = document.createElement('link');
		    customFont.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap";
		
		    customFont.type = "text/css";
		    customFont.rel = "stylesheet";
		
		    document.head.appendChild(customFont);
		}());
</script>
```
