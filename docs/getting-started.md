# Getting Started

## Requirements

This theme uses SCSS and TypeScript. For that reason, it's necessary to use **Hugo ≥ 0.78.0**.

Use **Hugo Extended** version if you want to:

* Use the latest feature/fix from `master` branch
* Edit SCSS files

_\(It's recommended to use Extended version\)_

**Compiled CSS are updated once per release.**

## Installation

The last release of this theme can be found on this page: [Releases](https://github.com/CaiJimmy/hugo-theme-stack/releases)

If you want to try out the latest feature, you can download the theme executing the next Git clone command on your Hugo site folder.

You can also download this theme **using Git** \(recommended\), execute the following command under your Hugo site folder:

```bash
git clone https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
```

{% hint style="info" %}
If you are using Git to manage your Hugo site, add this theme as a submodule.
{% endhint %}

```bash
git submodule add https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
```

If it's your first time using this theme, take a look at `exampleSite` folder, which includes an example `config.yaml` with all available parameters.

{% hint style="warning" %}
Remove `config.toml` from your site folder.
{% endhint %}

In case this is your first time using Hugo, I recommend you copy the content of `exampleSite` to your Hugo site folder. \(_It includes a set of example posts._\)

The demo site is built using content included in `exampleSite`: [https://theme-stack.jimmycai.com/](https://theme-stack.jimmycai.com/)

Once you've done that, execute `hugo server` in your terminal. You should be able to visualize the theme on `http://localhost:1313`.

> _For more information about Hugo's functionality, check_ [_official documentation of Hugo_](https://gohugo.io/documentation/)_._

