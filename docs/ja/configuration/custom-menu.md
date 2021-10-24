# カスタムメニュー

::: warning
The old way to set the menu icon (using `pre` field) is now deprecated. It still works but will be removed in the future. Please migrate to the new method (using `params.icon` field).
:::

## First Method (Recommended)
If the menu item you'd like to add is a page, add `menu` field to its Front Matter:

```yaml
menu: 
    main:
        name: title (optional)
        weight: -90
        params:
            icon: icon-name
```

## Second Method

Menu setting is placed under `menu` section of `config.yaml`

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

* `identifier`: Item ID
* `name`: Display text
* `url`: Link
* `weight`: Priority of the item, lower value means higher priority.
* `params`: 
  * `icon`: Specify which SVG icon should be used
  * `newTab`: Open this link in new tab

If `params.icon` is set to `archive`, theme will look for `archive.svg` under `assets/icons` folder.

## Add custom icon

This theme comes with some SVG icons from [Tabler Icons](https://tablericons.com). You can find them under theme folder `assets/icons`.

If you want to include more icons, just download them from website above, and place them under `assets/icons` folder of your Hugo site.

