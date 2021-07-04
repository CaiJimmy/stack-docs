# Configuration

::: tip
Theme's newest configuration file can be found in [exampleSite/config.yaml](https://github.com/CaiJimmy/hugo-theme-stack/blob/master/exampleSite/config.yaml).   
Take that file as reference, this page's content might be outdated.
:::

Theme's example configuration is placed under `params` section of `exampleSite/config.yaml`.

## Site-wide settings

### `mainSections`

Pages places under this/those sections will be shown on homepage and archive page.

Ref: [Content Sections](https://gohugo.io/content-management/sections/)

### `featuredImageField`

Front Matter **field** used to fetch featured image of a page. Default `image`.

_Better not to edit this._

### `rssFullContent`

Output page's full content in RSS.

## Date Format

Date format setting. Notice that Go's date format is slightly different than other programming language, take a look at official documentation: [dateFormat](https://gohugo.io/functions/dateformat/)

### `published`

Page publish date format.

### `lastUpdated`

Page last updated date format

## Sidebar

Settings related with left-side sidebar.

### `avatar`

Site owner avatar.

If `local` is set to true, theme will look for `src` under `assets` folder

### `emoji`

Emoji that appears on bottom of the avatar. Can be empty.

### `subtitle`

Site description

## Article

Setting related with article page.

### `license`

Article license settings. It shows at the end of article:

* `enabled`： Show copyright info under every article by default if it's set to `true`. Can be disabled individually by specifying `license: false` in article's Front Matter.
* `default`： Default article license. Can be overwritten by specifying `license: "My custom licence"` on article's Front Matter.

### `math`

Enable KaTeX on all pages

## Comments

Comment system related settings.

### `enabled`

Show comment system by default in every article page.

### `provider`

Comment system provider. Available options:

* `disqus`
  * It's necessary to set `disqusShortname` field in `config.toml`. Official documentation: [Configure Disqus](https://gohugo.io/content-management/comments/#configure-disqus)
* `utterances`
* `remark42`

::: tip
To add support for more comment system, create `{provider}.html` under `layouts/partials/comments/provider/`.
:::

## **Widgets**

Settings related with right-sidebar widgets.

### `enabled`

An array including enabled widget's name. Available values:

* `archives`: Archives list
* `tag-cloud`: Tag cloud

### `archives`

* `limit`: How many items are being shown
* `path`: Relative path to archive page. For example `/archives`

### `tagCloud`

* `limit`: How many items are being shown

## OpenGraph

[Open Graph](https://ogp.me/) related settings.

### `twitter`

* `site`: Site owner's Twitter username
* `card`: [Twitter Card Style](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards), available values: `summary` / `summary_large_image`

## Default Image

Default featured image settings \(in case page doesn't have `image` field set in Front Matter.\)

All sections has following structure:

* `enabled`
* `src`: Image source
* `local`: If it's `true`, Hugo will look for `src` under your site's `assets` folder.

::: tip
**It's recommended to place images locally**. Otherwise, this theme won't be able to crop and optimize it automatically.
:::

### `opengraph`

Default image for Open Graph tag

## Color Scheme

Related with light / dark theme.

### `toggle`

Display toggle

### `default`

Default color scheme. Available values: `auto`, `light`, `dark`

