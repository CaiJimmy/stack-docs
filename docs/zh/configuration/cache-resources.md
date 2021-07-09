# 缓存资源文件夹

如果站点有很多图片，生成站点可能会花费很多时间来生成不同尺寸的缩略图。

为了加速这一过程，Hugo 会把裁剪好的图片缓存在站点目录下的 `resources` 文件夹。

Hugo 官方建议把这个文件夹加入版本控制系统：[Image Processing Performance Consideration](https://gohugo.io/content-management/image-processing/#image-processing-performance-consideration)

如果你在使用 Netlify，也可以使用这个插件：[cdeleeuwe/netlify-plugin-hugo-cache-resources](https://github.com/cdeleeuwe/netlify-plugin-hugo-cache-resources)

其他的 CI 系统也应该有类似的插件来保存缓存文件夹。