# 开始使用

## 环境要求

**最低 Hugo 版本要求为 0.78.0。**

以下情况需要用到 Hugo Extended 版本：

-   修改 SCSS 文件
-   或使用 GitHub 仓库的最新版本

第一次使用 Hugo 可以参考官方的安装手册：

{% embed url="https://gohugo.io/getting-started/installing/" %}

如果你在使用 Windows，我推荐使用 [Scoop](https://scoop.sh/) 来安装 Hugo：

```bash
scoop install hugo-extended
```

如果使用 [Choco](https://chocolatey.org/)：

```bash
choco install hugo-extended
```

## 下载主题

可以在 GitHub 仓库的 [Release](https://github.com/CaiJimmy/hugo-theme-stack/releases) 页面找到最新的稳定版。 下载后把 `hugo-theme-stack-master` 改名为 `hugo-theme-stack` 并放到站点目录的 `theme` 文件夹下。

也可以使用 Git 命令来下载主题的最新版本。在 Hugo 站点目录下执行：

```bash
git clone https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
```

如果你在使用 Git 管理来 Hugo 站点的源文件，可以把主题添加为 Submodule：

```bash
git submodule add https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
```

如果是第一次使用本主题，建议把 `exampleSite` 文件夹中的 `assets` 和 `config.yaml` 复制到站点目录下。后者是 Hugo 站点的配置文件，已经写入了主题的可配置字段。
