# 小部件 (Widgets)

小部件放置在博客的右侧栏。它们用于显示某些信息，如分类、标签等。

您可以配置在主页和文章页面中显示哪些小部件及其顺序。

`widgets.homepage` 和 `widgets.page` 是映射数组。每个映射包含两个键：`type` 和 `params`。`type` 是小部件的名称。`params` 是小部件的配置。

## 可用的小部件

### archives (归档)

显示年份列表及每年的文章发表数量。

您需要预先创建一个 `layout: archives` 的页面。

#### 参数

- `limit`: 要显示的年份数量。默认值：`10`。

### search (搜索)

显示一个搜索框。

您需要预先创建一个 `layout: search` 的页面。

### categories (分类)

显示博客中可用的分类列表。

#### 参数

- `limit`: 要显示的分类数量。默认值：`10`

### toc (目录)

显示页面的目录。

### tag-cloud (标签云)

显示标签云。

#### 参数

- `limit`: 要显示的标签数量。默认值：`10`

### taxonomy (分类法)

显示自定义分类法（如分类、标签或您定义的任何其他分类法）。也可用于替代 `categories` 和 `tag-cloud` 小部件。
小部件的标题将会链接到该分类法的页面。

#### 参数

- `taxonomy`: 要显示的分类法名称（例如 `"categories"`, `"tags"`, `"series"`）。
- `limit`: 要显示的项目数量。默认值：`10`
- `icon`: 可选的 [SVG 图标](menu.md#add-custom-icon)。
- `showLink`: 是否将标题链接到对应的分类法页面。
- `title`: 小部件的自定义标题。
