# Cache resources folder

If your site has a large number of images, it could take a long time to generate the site (to generate thumbnails).

To accelerate the build process, you can cache the `resources` folder under your Hugo site folder.

The official Hugo documentation recomends to include the `resources` folder in version control system: [Image Processing Performance Consideration](https://gohugo.io/content-management/image-processing/#image-processing-performance-consideration)

Or, if you are using services like Netlify, there are probably plugins that allows you to cache a specific folder. 

> For Netlify: [cdeleeuwe/netlify-plugin-hugo-cache-resources](https://github.com/cdeleeuwe/netlify-plugin-hugo-cache-resources)