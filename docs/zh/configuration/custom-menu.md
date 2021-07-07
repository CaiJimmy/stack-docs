# 自定义菜单

## 第一种方法（推荐）

如果想在菜单加入站点的某个页面，可以在相应的 Markdown Front Matter 添加以下字段：

```yaml
menu: 
    main:
        name: title (optional)
        pre: icon
        weight: -90
```

## 第二种方法

在 `config.toml` 的底部可以找到菜单的配置，默认的内容如下：

```toml
[menu]
    [[menu.main]]
        identifier = "home"
        name = "Home"
        url = "/"
        weight = -100
        pre = "home"
    [[menu.main]]
        identifier = "about-cn"
        name = "About"
        url = "about"
        weight = -90
        pre = "user"
    [[menu.main]]
        identifier = "archive"
        name = "Archive"
        url = "archive"
        weight = -70
        pre = "archive"
```

* `identifier`：ID
* `name`： 显示文字
* `url`： 链接
* `weight`：权重
* `pre`： **用于显示图标**

## 配置图标

主题自带的 SVG 图标来自 [Tabler Icons](https://tablericons.com)，存放在 `assets/icons` 目录下。

你可以在站点根目录下新建同名文件夹，并下载更多的图标（参考：[修改主题](https://www.notion.so/jimmycai/18902ecb5832477abc534d9a27b97af9)）

我使用了 `pre` 字段来指定菜单项目的图标。`pre = "archive"` 主题会输出 `assets/icons/archive.svg` 图标。
