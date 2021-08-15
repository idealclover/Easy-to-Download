# app-download

[![Build Status](https://travis-ci.com/FEMessage/app-download.svg?branch=master)](https://travis-ci.com/FEMessage/app-download)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/app-download/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)


- PC显示效果

![app-download-pc](https://i.screenshot.net/elnz9uj)

- MOBILE显示效果

![app-download-mobile](https://i.screenshot.net/nexpji5)

## Table of Contents

* [Introduction](#introduction)
* [Feature](#feature)
* [快速开始](#快速开始)
* [目录结构](#目录结构)
* [页面信息配置](#页面信息配置)
* [环境变量](#环境变量)
* [构建](#构建)
* [License](#License)

## Introduction
App下载页面模版: 简单配置一下就能得到一个app下载页面

[⬆ Back to Top](#table-of-contents)

## Feature
- 只需简单地配置下logo、下载链接等，即可得到一个app下载页面
- 响应式布局，支持移动端，pc端
- 兼容android与ios设备在不同浏览器下的行为

流程如下：
![流程](https://cdn.nlark.com/yuque/__puml/c3389e5abaf49bc430eb9d21b2cf923f.svg)

[⬆ Back to Top](#table-of-contents)

## 快速开始

```sh
# 安装依赖
yarn

# 开发
yarn dev


# 构建
yarn build
```

[⬆ Back to Top](#table-of-contents)

## 目录结构
```sh
├── README.md
├── poi.config.js          poi配置文件
├── package.json
├── config.json              页面配置文件
├── public                 公共文件
│   ├── images             图片存放 图片使用相对路径引入
│   │   ├── open_in_browser_tip_bg.png
│   │   └── download.png
│   ├── index.html
│  
├── style                  样式存放
│   ├── bulma.css
│   └── common.less
└── yarn.lock
```

[⬆ Back to Top](#table-of-contents)

## 页面信息配置

修改 config.json 即可配置页面信息，修改后重新执行 yarn dev 即可看到效果。

当然，您也可以对页面html进行拓展，页面使用[EJS模版](https://ejs.bootcss.com/)。

```javascript
{
  "title": "xx App", // 显示在头部的标题，文档标题为下载加上此 title，即此处文档标题为"下载 xx App"
  "logo": "https://i.screenshot.net/54qmgiy", // 显示在头部的 app logo
  "app": [ // app 下载配置
    {
      "platform": "Android", // 平台
      "downloadLink":"", // 下载链接，对于 ios 的 app，只需上架后在此填 app store 链接即可
      "qrcode": true, // 是否显示二维码 二维码为当前地址 location.href
      "icon": "https://i.screenshot.net/o80j4t2" // 操作系統 logo
    },
    {
      "platform": "iOS",
      "downloadLink": "",
      "qrcode": false,
      "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA/BAMAAACob32rAAAAIVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P8wCOwAAAACnRSTlMAGb6OcuHzpVs+6IZEKwAAAW9JREFUeAG1lb9Lw1AQx1+som5BSyhO4hCkk1Ch2ik6OolUhY4OFZzcBKdaBNf4Y3IzNUl7f6W55DXP0vveIHhTeJ93733v3vVbI8RHGBkYY6IDCN+ICOauFpBiRHsFzHwtNUepn0xniA6Y7moHE7p2jeFUvTbS6oGp5pEoga0wbUpGEJrxkaTXe+4cvtrvVnfvYWFTMyzUpPu85J3ese7kpIbb5QLR7ZNphdUnpfO6NgZ2hbJLu49x7IoUoqp7XYZEI9sBOc7rZxEi5xJ2EI20g78ZbqLUcqYbACZuGoSYuWkQ4r6kZ4DG82mQIvXdACNRiOb/RvV7rea2Wm/vT736UvtcyQoArUZjBdGp8wKU7EE68ZWCifo+LolKZ4Kiy440MPU1WbnW6aqZgXJt8dMHMFOf2HpeAKvFR9f2L6quDV70FefDgq6Jc8KtZfrr78yzyRedbriUap8iPeaNL2yG6aJLv18Nr+1KMxze2M8fURLvee/vAC0AAAAASUVORK5CYII="
    }
  ]
}
```

[⬆ Back to Top](#table-of-contents)


## 环境变量
使用.env设置环境变量, 即在项目根目录新建一个.env文件, 填写环境变量即可。

.env文件示例:

```sh
# 左边是变量名(一般大写，下划线分割单词)，右边是变量值
# 注意=号两边不能有空格
PUBLIC_PATH=./
```

| 环境变量名    | 说明
| ----------- | --------------
| PUBLIC_PATH | 静态资源构建目录

[⬆ Back to Top](#table-of-contents)

## 构建
构建会读取根目录下的.env文件获取环境变量, 默认在`dist`目录输出静态文件

命令如下:

```sh
yarn build
```
[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
