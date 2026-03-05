# Cookies (GDPR)

The v4 release introduced a GDPR cookie consent banner. When enabled, analytics and functional cookies require user consent before being loaded.

```toml
[cookies]
    enabled      = false
    showSettings = true

    [cookies.categories]
        analytics  = true
        functional = true
```

* `enabled`: Default is `false`. When set to `true`, the cookie consent banner will appear for new visitors.
* `showSettings`: Whether to show the settings button on the banner, allowing users to select cookie categories.
* `categories`: Define which types of cookies your site utilizes. Setting these to `true` will list them in the cookie settings dialog.

## Technical Details

This feature interacts with other conditionally loaded components. For example, if `analytics` is checked and consented to by the user, analytics scripts (such as Google Analytics or Umami) will be injected dynamically. If the user declines, they won't be loaded.
