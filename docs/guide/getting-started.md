# Getting Started

::: tip
Try this quickstart template to get started with Stack and Hugo in a few minutes:
https://github.com/CaiJimmy/hugo-theme-stack-starter
:::

## Requirements

Before you start, make sure you have installed Hugo **extended version**. For more information, see [Hugo's documentation](https://gohugo.io/getting-started/installing/).

This theme uses SCSS and TypeScript, that's why Hugo extended version is required. If you are using a non-extended Hugo installation, you will get the following error:

```
Error: Error building site: TOCSS: failed to transform "scss/style.scss" (text/x-scss): this feature is not available in your current Hugo version
```

Once you have installed Hugo, you can check the version by running the following command:

```bash
hugo version
```

Which should output something like this (the version number may be different). Notice the `extended` keyword:

```
hugo v0.157.0+extended+withdeploy darwin/arm64 BuildDate=2026-02-25T16:38:33Z VendorInfo=Homebrew
```

The minimum required Hugo version can be seen in the [theme's `theme.toml` file](https://github.com/CaiJimmy/hugo-theme-stack/blob/master/theme.toml#L23)

## Installation

### Quickstart

::: tip
Recommended method if you are using Hugo for the first time!
:::

Use the [starter template](https://github.com/CaiJimmy/hugo-theme-stack-starter) to quickly set up a Hugo website with this theme. It has a GitHub Action set up so changes to the site are automatically built and pushed to GitHub Pages.

In case you get lost during the setup process, here's a video tutorial that sets up a new Hugo site using this template, and deploys it to GitHub Pages: https://www.youtube.com/watch?v=8qDdQQ6Ifxo

### Hugo module

This theme is also available as a [Hugo module](https://gohugo.io/hugo-modules/). Run the following command in the root directory of your Hugo site:

First turn your site into a Hugo module (in case you haven't done it yet):

```sh
hugo mod init github.com/me/my-new-blog
```

Then import the theme as a dependency adding the following line to the `module` section of your site's configuration file.

```toml
# hugo.toml
[[module.imports]]
    path = "github.com/CaiJimmy/hugo-theme-stack/v4"
```

This makes Hugo use the latest stable `v4` version of the theme (available on the release page).

To update the theme to the latest version, run the following command:

```sh
hugo mod get -u github.com/CaiJimmy/hugo-theme-stack/v4
hugo mod tidy
```

::: info
In the future, if a new major version of the theme is released, you will need to manually update the version number in the `path` field.
:::

::: info
Using this method, there won't be any file under `themes` directory. In order to modify the theme, you will have to copy the file you want to modify to the same directory under `layouts` directory.

For example, in order to modify the `themes/hugo-theme-stack/layouts/partials/header.html` file, you will have to copy it to `layouts/partials/header.html` and modify it there (copy the code from theme's repository). The same applies to `assets` and `static` directories.
:::

### Git

On the master branch, you can find the theme's latest source code. To use the latest version, you can clone the repository to `themes/hugo-theme-stack` by running the following command in the root directory of your Hugo site:

```bash
git clone https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
```

If you are already using Git for your site, you can add the theme as a submodule by running the following command in its root directory:

```bash
git submodule add https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
```

### Download manually (not recommended)

You can also download the theme from the [release page](https://github.com/CaiJimmy/hugo-theme-stack/releases) and extract it to the `themes/hugo-theme-stack` directory.
