# 修改主题

根据您安装主题的方式，修改它的难度可能会有所不同。

## Hugo 模块 (Hugo module)

使用此方法，`themes` 目录下不会有任何文件。为了修改主题，您需要将想要修改的文件复制到 `layouts` 目录下对应的目录中。

例如，要修改 `themes/hugo-theme-stack/layouts/_partials/head/custom.html` 文件，您需要将其复制到 `layouts/_partials/head/custom.html` 并在那里进行修改（从主题仓库中复制原始代码）。
这同样适用于 `assets` 和 `static` 目录。

## Git 子模块 (Git submodule)

::: tip
上面描述的 Hugo 模块的方法在这里也适用。事实上，这也是进行小改动的推荐方式。
:::

如果您通过 Git / Git 子模块安装了主题，您可以直接修改主题文件并在本地站点中查看更改。

但是，**您不能直接提交并推送更改**，因为您没有推送到主题存储库的权限。

您需要 **fork** 主题存储库并将您的更改推送到您 fork 的存储库（更改子模块的存储库 URL）。然后，您可以将这些更改提交到您的站点存储库。
