# Shortcodes

最后更新在 `v3.2.0`.

- [bilibili](#bilibili)
- [tencent](#tencent)
- [video](#video)
- [youtube](#youtube)

## bilibili

tags:
- `AV` 或者 `BV` id
- `分P号`

例子:
```
{{< bilibili (av号或BV号) >}}
{{< bilibili (av号或BV号) (分P号) >}}
```

## tencent

例子:
```
{{< tencent (vid号) >}}
```

## video

| tag | description |
| :-- | :---------- |
| src 或者 空白 | 视频文件路径 |
| autoplay | 自动播放 |
| poster | 封面文件路径 |

例子:
```html
<!-- just video src -->
{{< video "./video.mp4">}}

<!-- Other option -->
{{< video src="./video.mp4" autopaly=true poster="./video-poster.png" >}}
```

## youtube

| tag | description |
| :-- | :---------- |
| id 或者 空白 | 视频ID |
| autoplay | 自动播放 |

例子:
```
{{< youtube ZJthWmvUzzc >}}
{{< youtube id="ZJthWmvUzzc" autoplay="true" >}}
```