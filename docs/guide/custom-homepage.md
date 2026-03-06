# Custom Homepage

By default, the Stack theme displays a list of recent articles on the homepage. If you prefer to have a single static page as your homepage, you can easily do so.

## Turning the Homepage into a Single Page

To create a single page homepage, you need to create an `_index.md` file in the root of your `content` directory:

```bash
hugo new content/_index.md
```

Then, open the newly created `content/_index.md` file and add `layout: single` to its frontmatter. You can use this file like a normal article to add your desired content, shortcodes, and even a featured image.

Here is an example of what `content/_index.md` might look like:

```yaml
---
title: "Welcome to My Blog"
date: 2024-01-01
layout: single
---

This is my custom homepage! You can add any Markdown content here.
```

Once this is set, the theme will render this single page as the homepage instead of the usual post list.
