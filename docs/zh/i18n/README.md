# i18n

修改 `config.yaml` 的 `DefaultContentLanguage` 来选择主题语言。

```yaml
DefaultContentLanguage: en
```

## 支持的语言

目前支持的语言可以在 `i18n` 文件夹下看到。

-   `de`: 德语
-   `en`: 英语
-   `es`: 西班牙语
-   `fr`: 法语
-   `id`: 印尼语
-   `it`: 意大利语
-   `ja`: 日语
-   `ko`: 韩语
-   `nl`: 荷兰语
-   `pl`: 波兰语
-   `pt-br`: 葡萄牙语
-   `ru`: 俄语
-   `tr`: 土耳其语
-   `zh-cn`: 简体中文
-   `zh-tw`: 繁体中文（台湾）
-   `zh-hk`: 繁体中文（香港）

欢迎提交翻译文件 😉

## 关于汉字字型的说明

如果您的站点同时提供了中文的不同变体，需要在站点的 `config.yaml` 文件中指定 languageCode，如 `languageCode: zh-tw` 才能正确显示相应的变体字型。

```
languages:
    zh-cn:
        languageName: 简体中文（中国大陆）
        languageCode: zh-cn
        title: Example Site
        weight: 1

    zh-hk:
        languageName: 繁体中文（香港）
        languageCode: zh-hk
        title: Example Site
        weight: 2

    zh-tw:
        languageName: 正體中文（台灣）
        languageCode: zh-tw
        title: Example Site
        weight: 3
```

同样的，如果您的站点同时提供了中文、日语、韩语中的任意两种语言，您也需要制定 languageCode，以获得正确的汉字字体与字型。

```
languages:
    zh-cn:
        languageName: 中文
        languageCode: zh-cn
        title: Example Site
        weight: 1

    ja:
        languageName: 日本語
        languageCode: ja-jp
        title: Example Site
        weight: 2

    ko:
        languageName: 한국어
        languageCode: ko-kr
        title: Example Site
        weight: 3
```
