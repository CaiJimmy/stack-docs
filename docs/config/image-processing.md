# Image Processing

This theme uses Hugo's built-in image processing features to resize and optimize local images (included using page bundle feature). This is done automatically when you build your site.

When there are many images in your site, this can slow down the build process. You can choose to disable this feature here.

Fields are under `[imageProcessing]` section.

## autoOrient

- Type: `bool`
- Default: `false`

Automatically orient images based on EXIF data.

## thumbnail

Configurations related to thumbnail generation (e.g. for tile/compact layouts or Open Graph).

### thumbnail.enabled

- Type: `bool`
- Default: `true`

Enable image processing for cover (featured) thumbnails.

## content

Configurations related to images inside articles/pages content.

### content.enabled

- Type: `bool`
- Default: `true`

Enable image processing for images in content to provide responsive image sizes.

### content.widths

- Type: `array`
- Default: `[800, 1600, 2400]`

An array of specified widths used to generate responsive images for different screen sizes via `srcset`.