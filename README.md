## 介绍
基于 WePY + WeUI，以组件化思想开发微信小程序。

## 相关
- [WePY](https://github.com/wepyjs/wepy)
- [小程序框架 WePY 文档](https://wepyjs.github.io/wepy)
- [WeUI WXSS](https://github.com/weui/weui-wxss)
- [阿里巴巴 Icon Font](http://iconfont.cn/)

## 感谢整理
- [WePY WeUI Demo](https://github.com/wepyjs/wepy-weui-demo)

## 使用
```bash
# 下载代码
$ git clone https://github.com/zhaotoday/wepy.git

# 安装依赖
$ npm install

# 开发实时编译
$ wepy build --watch
```

## 目录结构
```
├── dist                     编译目录
├── src                      源码目录
|   ├── assets               引用的第三方资源（如：WeUI）
|   ├── components           通用组件
|   |   └── my-component     my-component 组件
|   |       ├── index.wpy    my-component 业务
|   |       └── styles.scss  my-component 样式
|   ├── images               图片
|   ├── pages                页面目录
|   |   └── my-page          my-page 页面
|   |       ├── index.wpy    my-page 业务
|   |       └── styles.scss  my-page 样式
|   ├── styles               Sass function、mixin 等
|   ├── utils                JS 工具集合
|   └── app.wpy              小程序配置项（全局样式配置、声明钩子等）
└── package.json             package 配置
```

## 微信开发者工具的使用
- 使用微信开发者工具新建项目，本地开发选择 dist 目录；
- 微信开发者工具 --> 项目 --> 关闭 ES6 转 ES5。

## WebStorm 代码高亮
- File --> Settings --> File Types --> [Recognized File Types] Vue.js Templates --> 添加 *.wpy。

## 小贴士
- [iconfont.cn](http://iconfont.cn/) 上有丰富的图标资源，下载时可编辑尺寸颜色，选择 PNG 下载，即可获得小程序可用的图标文件；
- 解决用 WebStorm 开发小程序，格式化 CSS 时，数值和 rpx 之间被加了空格的 bug，请参考 [[链接](http://www.qianduan.org/post-471.html)]。

## 未完待续
