# Easy-to-Download

> 🍭 光写出来还不行，还得想办法卖出去

一个可轻松配置的，多端友好的 APP 下载页

Based on [CoolAPK](https://coolapk.com/) and [FEMessage/app-download](https://github.com/FEMessage/app-download).

**[预览链接 & 南哪课表官网](https://app.nju.today/)**

- PC 端显示效果

![PC](https://i.loli.net/2021/08/22/XWdeLr6D4tR5bCE.png)

- 移动端显示效果

<a href="https://sm.ms/image/FUhk2qN5CmjvLPz" target="_blank"><img src="https://i.loli.net/2021/08/22/FUhk2qN5CmjvLPz.png" width="250"></a>

- json 文件轻松配置 三分钟搭建新的 APP 下载页
- 移动端支持直接下载对应系统，iOS 系统自动唤起应用商店
- QQ/微信浏览器引导跳转
- 支持复制网址分享

## 快速开始

```sh
# 安装依赖
yarn

# 开发
yarn dev

# 构建
yarn build
```

## 页面信息配置

修改 config.json 即可配置页面信息，修改后重新执行 yarn dev 即可看到效果。

当然，您也可以对页面 HTML 进行拓展，页面使用 [EJS 模版](https://ejs.bootcss.com/)。

```javascript
{
  "title":"南哪课表", // 显示在头部的标题
  "description": "南大人的专属课表", // 网站 discription
  "detail": "南大人的专属课表<br />一键登陆教务系统导入课程", // 展示在网站的详细介绍
  "logo": "https://image.idealclover.cn/projects/WheretoSleepinNJU/icon.png", // 显示在头部的 app logo
  "iOS": "https://apps.apple.com/cn/app/id1511705694", // iOS 下载链接
  "Android": "https://www.coolapk.com/apk/218862", // 安卓下载链接
  "share": "南哪课表-南大人的专属课表，快来一起使用吧！https://app.idealclover.cn" // 分享后剪贴板的文字
}
```

## License

[MIT](./LICENSE)
