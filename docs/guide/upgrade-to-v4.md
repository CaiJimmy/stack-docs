# Upgrade to v4

For further details, refer to the [Release Notes](https://github.com/CaiJimmy/hugo-theme-stack/releases) and compare your configuration against the new `demo` folder or [starter template](https://github.com/CaiJimmy/hugo-theme-stack-starter).

## Minimum Hugo Version

The minimum required Hugo version has been bumped to **v0.157.0**.

I recommend always using the latest stable version of Hugo, because when fixing bugs or adding new features, the latest version is always the reference for me. It's very possible that within the `v4` major version, there are some updates that require updating the Hugo version.

In case of [starter template](https://github.com/CaiJimmy/hugo-theme-stack-starter), it has now been configured to use always the latest stable version of Hugo.

## Changes

### YAML to TOML

The theme configuration and i18n files have migrated from YAML to **TOML**.

- The main configuration file `config.yaml` is now `hugo.toml`
- You are free to keep using `yaml` and Hugo should handle the conversion transparently.
- All available configuration options are stored in `config` directory of theme repository, [split into multiple files](https://gohugo.io/configuration/introduction/#configuration-directory) for better organization.
- As a user, you are not required to use this configuration format. You can keep using a single `hugo.toml` file.
- Language files in the `i18n` folder (e.g., `en.yaml`) are now in TOML format too. If you are overriding some of them, then you should convert them to TOML as well.

### i18n

Now dates are displayed in localized format based on current site language. Check the demo to see the difference.

```toml
[dateFormat]
    published   = ":date_full"
    lastUpdated = ":date_full"
```

See https://gohugo.io/functions/time/format/#localization for more information.

Because this would only work if the language code matches with the one from [gohugoio/locales](https://github.com/gohugoio/locales) package, some Chinese language codes were renamed: 

- `zh-cn` was renamed to `zh`
- `zh-hk` was renamed to `zh-hant-hk`
- `zh-tw` was renamed to `zh-hant-tw`

If you are using any of these old values as the key in `i18n` or `defaultContentLanguage`, you should change them to their new respective codes.

### Images

- **Vibrant.js has been removed**: The theme no longer automatically extracts dominant colors from post images via Vibrant.js but via Hugo's native image processing.
- **Image Processing**: `[imageProcessing.cover]` has been renamed to `[imageProcessing.thumbnail]`.
- **External images**: In v3, external images in article content could not be displayed with lightbox and gallery style. This has been fixed now.
- **Lightbox**: Photoswipe has been updated to the latest version (v5).

### Favicon and avatar

- **Favicon**: The favicon is now located within the `assets` folder instead of `static/`.
- **Avatar**: The `local` boolean flag under `[sidebar]` avatar configuration has been removed. Simply provide the path or URL.

```toml
favicon = "img/favicon.png" # --> assets/img/favicon.png

[sidebar]
    avatar = "img/avatar.png" # --> assets/img/avatar.png
```

## New features

### Custom sorting order

Now it's possible to sort post by `lastmod` (having the last modified post at the top).

```toml
# Accepted values: "default", "lastmod"
# default = see https://gohugo.io/quick-reference/glossary/#default-sort-order
# lastmod = sort by last modified date, in descending order
SortBy             = "default"
```

### Widgets

A new generic `taxonomy` widget has been introduced, which allows you to display taxonomies other than categories and tags. The original `categories` and `tags` widgets are still available.

```toml
[widgets]
    homepage = [
        { type = "taxonomy", params = { taxonomy = "customTaxonomy", limit = 5, icon = "tag" } },
    ]
```

### Mermaid Diagrams

Native support for Mermaid diagrams has been added. There is a new block `[article.mermaid]` to configure it, see `config/_default/params.toml` for more details.

### Markdown alert support

Markdown alert is now supported natively.

```markdown
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!NOTE] Custom title
> You can also provide a custom title for the note alert.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

There is a new block `[article.alertIcon]` in `params.toml` to configure the icon assigned to each alert type. Colors can also be configured via CSS variables.

```css
--alert-note-color: #4da3ff;
--alert-note-background: rgba(77, 163, 255, 0.08);
--alert-tip-color: #3fb950;
--alert-tip-background: rgba(63, 185, 80, 0.08);
--alert-important-color: #8457d9;
--alert-important-background: rgba(130, 80, 223, 0.08);
--alert-warning-color: #d29922;
--alert-warning-background: rgba(210, 153, 34, 0.1);
--alert-caution-color: #f85149;
--alert-caution-background: rgba(248, 81, 73, 0.1);
```

### New Comment Provider: Comentario

Added natively support for [Comentario](https://comentario.app/) comment server under the `[comments.comentario]` block.

### GDPR Cookie Consent Banner

Added a new GDPR-compliant cookie consent banner under the `[cookies]` configuration block to conditionally load analytics and functional cookies.

## Dropped features

### Page Visibility (Hidden)

The `hidden` front matter parameter, previously used to hide pages from lists, has been removed. It is replaced by Hugo's native `build.list` option.

To hide a page, set its front matter to:

```yaml
---
build:
    list: "never"
---
```

### Sidebar Menu Icons

The sidebar custom menus no longer support the `.Pre` parameter for icons. You will need to reconfigure or remove custom icons defined via `.Pre` in your menu configuration.

### Default OpenGraph Image

The `[opengraph]` configuration (`opengraph.local` and `opengraph.src`) for a fallback default OpenGraph/Twitter image when a page has no featured image has been dropped.

