# 升级到 v4

关于更多详细信息，请参考 [Release Notes](https://github.com/CaiJimmy/hugo-theme-stack/releases)，并根据新的 `demo` 示例网站或 [starter template](https://github.com/CaiJimmy/hugo-theme-stack-starter) 模板中的配置文件对比并更新。

## 最小 Hugo 版本

Hugo 最低版本要求已提升至 **v0.157.0**。

建议始终使用 Hugo 的最新稳定版本，因为在修复错误或添加新功能时，我都会使用最新版本作为参考。在 `v4` 大版本生命周期内，很可能有某些更新需要更新 Hugo 版本。

[Starter template](https://github.com/CaiJimmy/hugo-theme-stack-starter) 已配置为始终使用最新的 Hugo 稳定版本。

## 变更

### 从 YAML 迁移到 TOML

主题配置文件和 i18n 文件已从 YAML 迁移到了 **TOML**。

- 主配置文件 `config.yaml` 现为 `hugo.toml`
- 您可以继续使用 `yaml`，Hugo 会自动处理转换。
- 所有可用的配置选项现已保存在主题仓库的 `config` 目录中，[被拆分为多个文件](https://gohugo.io/configuration/introduction/#configuration-directory) 方便管理。
- 作为用户，您不需要强制使用此配置格式。您可以继续使用单一的 `hugo.toml` 文件。
- `i18n` 文件夹中的语言文件（如 `en.yaml`）现在也采用 TOML 格式。如果您覆盖了其中某些文件，也应将它们转换为 TOML 格式。

### 多语言 (i18n)

现在日期会根据当前站点语言以本地化格式显示。您可以查看演示站点来查看具体的区别。

```toml
[dateFormat]
    published   = ":date_full"
    lastUpdated = ":date_full"
```

相关更多信息，请参考 https://gohugo.io/functions/time/format/#localization。

由于此功能仅当语言代码与 [gohugoio/locales](https://github.com/gohugoio/locales) 包中的代码完全匹配时才有效，因此我必须将 `zh-cn` 重命名为 `zh`。如果您在 `i18n` 或 `defaultContentLanguage` 中使用了 `zh-cn` 作为语言键值，则应将其更改为 `zh`。

### 图片

- **移除了 Vibrant.js**：主题不再通过 Vibrant.js 自动从文章图片中提取主色，而是通过 Hugo 的原生图像处理功能实现。
- **图像处理**：`[imageProcessing.cover]` 已更名为 `[imageProcessing.thumbnail]`。
- **外部图片**：在 v3 中，文章内容中的外部图片无法通过灯箱（Lightbox）和画廊样式展示。该问题现已被修复。
- **灯箱（Lightbox）**：Photoswipe 已更新至最新版本 (v5)。

### 网站图标和头像

- **网站图标 (Favicon)**：网站图标现在位于 `assets` 文件夹中，而不是过去的 `static/` 目录。
- **侧边栏头像 (Avatar)**：移除了侧边栏头像配置下的 `local` 布尔参数。现在只需直接提供路径或 URL 即可。

```toml
favicon = "img/favicon.png" # --> assets/img/favicon.png

[sidebar]
    avatar = "img/avatar.png" # --> assets/img/avatar.png
```

## 新功能

### 自定义排序顺序

现在支持按 `lastmod` 排序文章（最后修改的文章将会显示在最前面）。

```toml
# 支持的值: "default", "lastmod"
# default = 参考 https://gohugo.io/quick-reference/glossary/#default-sort-order
# lastmod = 按最后修改日期降序排序
SortBy             = "default"
```

### 小部件

引入了全新的通用的 `taxonomy` 小部件，除了分类（categories）和标签（tags）之外，它允许您显示其他的自定义分类。原本的 `categories` 和 `tags` 小部件仍然可用。

```toml
[widgets]
    homepage = [
        { type = "taxonomy", params = { taxonomy = "customTaxonomy", limit = 5, icon = "tag" } },
    ]
```

### Mermaid 图表

现已添加对 Mermaid 图表的原生支持。您可以参阅并使用全新的配置块 `[article.mermaid]` 进行设置，详情见 `config/_default/params.toml`。

### Markdown Alert 支持

现已原生支持 Markdown Alert：

```markdown
> [!NOTE]
> 突出显示用户应考虑的信息，即便是粗略浏览时。

> [!NOTE] 自定义标题
> 您还可以为笔记警告提供自定义标题。

> [!TIP]
> 帮助用户更成功的可选信息。

> [!IMPORTANT]
> 用户成功所必需的关键信息。

> [!WARNING]
> 由于潜在风险而需要用户立即关注的关键内容。

> [!CAUTION]
> 操作的潜在负面后果。
```

`params.toml` 中新增了 `[article.alertIcon]` 配置块分配各类 Alert 的图标。另外，颜色也可以通过 CSS 变量进行配置：

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

### 新留言板服务: Comentario

现已在 `[comments.comentario]` 配置块下原生支持 [Comentario](https://comentario.app/) 留言板。

### GDPR Cookie 隐私免责声明

在 `[cookies]` 选项块下添加了一个兼容 GDPR 的 Cookie 隐私同意横幅，允许根据用户选择条件加载分析及功能性 Cookie。

## 移除的功能

### 页面可见性 (Hidden)

之前用于在列表中隐藏页面的 `hidden` Front Matter 参数已被移除。它被 Hugo 原生的 `_build.list` 选项所取代。

若要隐藏页面，请将其 Front matter 设置为：

```yaml
---
build:
    list: "never"
---
```

## 侧边栏菜单图标

侧边栏自定义菜单不再支持通过 `.Pre` 参数设置图标。您需要重新配置或移除在菜单配置中使用的 `.Pre` 图标。
