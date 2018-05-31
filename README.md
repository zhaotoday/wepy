## 介绍
基于 WePY，以 Web 前端的开发风格开发微信小程序。

## 链接
- [微信公众平台](https://mp.weixin.qq.com/)
- [微信小程序简易教程](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
- [Wafer - 小程序开发全栈资源套件](https://github.com/tencentyun/wafer)
- [WePY](https://github.com/wepyjs/wepy)
- [WePY 文档](https://tencent.github.io/wepy/)
- [WePY 开发资源汇总](https://github.com/aben1188/awesome-wepy)
- [WeUI WXSS](https://github.com/weui/weui-wxss)
- [WePY WeUI Demo](https://github.com/wepyjs/wepy-weui-demo)
- [阿里巴巴 Icon Font](http://iconfont.cn/)
- [腾讯云微信小程序 扶持计划](https://dnspod.qcloud.com/la/apply?from=solution)
- [ZanUI in WePY](https://github.com/brucx/wepy-zanui-demo)
- [zanui-weapp](https://github.com/youzan/zanui-weapp)
- [wepy-X-minui](https://github.com/jimmyrogue/wepy-X-minui)
- [minui](https://github.com/meili/minui)

## 使用
```bash
# 安装 wepy-cli
$ npm install wepy-cli -g

# 下载代码
$ git clone https://github.com/zhaotoday/wepy.git

# 安装依赖包
$ npm install

# 实时编译
$ wepy build --watch
```

## 目录结构
```
├── dist                     编译目录
├── src                      源码目录
|   ├── components           通用组件目录
|   |   └── my-component     my-component 组件
|   |       ├── index.wpy    my-component 业务
|   |       ├── images       my-component 图片
|   |       └── styles.scss  my-component 样式
|   ├── pages                页面目录
|   |   └── my-page          my-page 页面
|   |       ├── index.wpy    my-page 业务
|   |       ├── images       my-page 图片
|   |       └── styles.scss  my-page 样式
|   ├── assets               引用的第三方资源（如：WeUI）
|   ├── styles               样式
|   |   ├── components       组件样式
|   |   ├── global           全局样式
|   |   └── utils            Sass 工具
|   |       ├── functions    Sass 函数
|   |       ├── mixins       Sass mixin
|   |       └── variables    Sass 变量
|   ├── store                redux 状态管理
|   ├── utils                JS 工具集合
|   └── app.wpy              小程序配置项（全局样式配置、声明钩子等）
└── package.json             package 配置
```

## 微信开发者工具
- 添加项目，项目目录请选择 dist 目录；
- 项目 -> 关闭 ES6 转 ES5；
- 项目 -> 关闭上传代码时样式自动补全；
- 项目 -> 关闭代码压缩上传；
- 本地项目根目录运行 wepy build --watch，开启实时编译。

## 代码高亮
- WebStorm -> File -> Settings -> File Types -> [Recognized File Types] Vue.js Templates -> 添加 *.wpy。

## 贴士
- IconFont 提供了丰富的图标资源，下载时可编辑尺寸颜色，选择 PNG 下载，即可获得小程序可用的图标文件；[[链接](http://iconfont.cn/) ]
- 用 Sass 函数解决 WebStorm 开发小程序，格式化 CSS 时，数值和 rpx 之间被加了空格的 bug；[[链接](http://www.qianduan.org/post-471.html)]
- 在 JS 脚本中引用图片，请使用绝对路劲，如：/images/icons/message/warn.png；
- 考虑到微信废弃接口的可能性，请将通过小程序接口获取到的用户信息保存到服务端；
- 在 app.wpy 的 constructor 中添加 this.use('promisify')，使 API promise 化，以便更好的支持 async/await。
