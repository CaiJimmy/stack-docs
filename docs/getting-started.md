# Installation

## Requirements

### General

This theme uses SCSS and TypeScript. For that reason, it's necessary to use **Hugo ≥ 0.78.0**.

Use **Hugo Extended** version if you want to:

* Use the latest feature/fix from `master` branch
* Edit SCSS files

_\(It's recommended to use Extended version\)_

**Compiled CSS are updated once per release.**

### Only when using theme as Hugo module:

* **Go version >= 1.12**, download Go installer [here](https://go.dev/dl/)
* **Git**, download Git installer [here](https://git-scm.com/downloads)

## Route 1 (traditional): install theme locally

The last release of this theme can be found on this page: [Releases](https://github.com/CaiJimmy/hugo-theme-stack/releases)

If you want to try out the latest feature, you can download the theme executing the next Git clone command on your Hugo site folder.

You can also download this theme **using Git** \(recommended\), execute the following command under your Hugo site folder:

```bash
git clone https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
```

::: tip
If you are using Git to manage your Hugo site, add this theme as a submodule.
:::

```bash
git submodule add https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
```

## Route 2 (recommended): use theme as Hugo module

- Turn your new site into a Hugo module:
```bash
hugo mod init github.com/me/my-new-blog
```

- Declare the `hugo-theme-stack` module as a dependency of your site:
```bash
hugo mod get github.com/CaiJimmy/hugo-theme-stack/v3
```

- Add the following lines at the end of your `config.yaml`:

```yaml
module:
  # uncomment line below for temporary local development of module
  # replacements: "github.com/CaiJimmy/hugo-theme-stack/v3 -> ../../hugo-theme-stack"
  imports:
    - path: github.com/CaiJimmy/hugo-theme-stack/v3
      disable: false
```

## Configuration and site startup

If it's your first time using this theme, take a look at `exampleSite` folder, which includes an example `config.yaml` with all available parameters.

::: warning
Remove `config.toml` from your site folder.
:::

In case this is your first time using Hugo, I recommend you copy the content of `exampleSite` to your Hugo site folder. \(_It includes a set of example posts._\)

The demo site is built using content included in `exampleSite`: [https://theme-stack.jimmycai.com/](https://theme-stack.jimmycai.com/)

Once you've done that, execute `hugo server` in your terminal. You should be able to visualize the theme on `http://localhost:1313`.

> _For more information about Hugo's functionality, check_ [_official documentation of Hugo_](https://gohugo.io/documentation/)_._

