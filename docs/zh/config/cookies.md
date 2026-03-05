# Cookies 隐私免责声明 (GDPR)

v4 版本引入了 GDPR cookie 同意横幅。启用后，分析和功能性 Cookie 需要用户同意才能加载。

```toml
[cookies]
    enabled      = false
    showSettings = true

    [cookies.categories]
        analytics  = true
        functional = true
```

* `enabled`：默认为 `false`。设置为 `true` 时，Cookie 同意横幅将显示给新访客。
* `showSettings`：是否在横幅上显示设置按钮，允许用户选择 Cookie 类别。
* `categories`：定义您的网站使用的 Cookie 类型。将这些设置为 `true` 会在 Cookie 设置对话框中列出它们。

## 技术细节

此功能与其他按条件加载的组件交互。例如，如果选中了 `analytics` 并且用户同意，分析脚本（例如 Google Analytics 或 Umami）将被动态注入。如果用户拒绝，它们将不会加载。
