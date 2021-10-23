# 自定义菜单

::: warning
主题之前使用了 `pre` 字段来设置菜单项目图标，现已经被标记为**弃用**，请使用 `params.icon` 字段来设置菜单项目图标。
:::

## 第一种方法（推荐）

如果想在菜单加入站点的某个页面，可以在相应的 Markdown Front Matter 添加以下字段：

```yaml
menu: 
    main:
        name: title (optional)
        weight: -90
        params:
            icon: icon
```

## 第二种方法

在 `config.yaml` 的底部可以找到菜单的配置，默认的内容如下：

```yaml
menu:
    main:
        - identifier: home
          name: Home
          url: /
          weight: -100
          params:
            icon: home
            newTab: true
```

* `identifier`：ID
* `name`： 显示文字
* `url`： 链接
* `weight`：权重
* `params`
  *  `icon`： **用于显示图标**
  *  `newTab`: 在新标签页打开链接

## 配置图标

主题自带的 SVG 图标来自 [Tabler Icons](https://tablericons.com)，存放在 `assets/icons` 目录下。

你可以在站点根目录下新建同名文件夹，并下载更多的图标（参考：[修改主题](https://www.notion.so/jimmycai/18902ecb5832477abc534d9a27b97af9)）

主题使用了 `params.icon` 字段来指定菜单项目的图标。`params.icon: "archive"` 会输出 `assets/icons/archive.svg` 图标。
