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

修改 .env 即可配置页面信息，修改后重新执行 yarn dev 即可看到效果。

当然，您也可以对页面 HTML 进行拓展，页面使用 [EJS 模版](https://ejs.bootcss.com/)。

```
VITE_TITLE="南哪课表"
VITE_DESC="南大同学的专属课表"
VITE_DETAIL="南大同学的专属课表<br />一键登陆教务系统导入课程"
VITE_LOGO="https://image.idealclover.cn/projects/WheretoSleepinNJU/icon.png"
VITE_BACKGROUND="https://image.idealclover.cn/projects/Life-in-NJU/background/bg5.jpg"
VITE_IOS="https://apps.apple.com/cn/app/id1511705694"
VITE_ANDROID="https://mirror.nju.edu.cn/download/%E5%8D%97%E5%93%AA%E8%AF%BE%E8%A1%A8"
VITE_GITHUB="https://github.com/idealclover/Easy-to-Download"
VITE_SHARE="南哪课表-南大同学的专属课表APP https://nju.app"
VITE_GCODE="G-RP7NWBCL10"
```

## License

[MIT](./LICENSE)
