# navigation

### 简介
一个基于Vue开发的网页导航网站，可以进行网站搜索以及各种类别的网址导航，采用响应式开发，同时适配PC+H5。

> PC

![](http://rqc11rygo.hn-bkt.clouddn.com/pc-20221208.png)

> H5

![](http://rqc11rygo.hn-bkt.clouddn.com/h5-20221208.jpg)

### 项目技术栈
* Vue 文档见 https://vuejs.org/guide/introduction.html
* WebPack 文档见 https://webpack.js.org/
* Less 文档见 https://less.bootcss.com/
* TailwindCSS 文档见 https://www.tailwindcss.cn/docs/installation
* Element-UI 文档见 https://element.eleme.cn/

### 目录结构

```
├── build // 打包配置目录
├── config // 打包配置目录
├── src
│   ├── assets // 资源目录
│   ├── components // 组件目录
│   ├── router // vue路由配置
│   ├── style // 样式目录
│   ├── utils // 工具类库
│   ├── views // 页面目录
│   ├── App.vue // app入口
│   └── main.js // 打包入口
├── static // 静态资源文件
├── package.json // npm配置文件
└── yarn.lock // node依赖包锁定配置文件
```

## 在线预览
![](http://rqc11rygo.hn-bkt.clouddn.com/qrcode-20221208.png)

## 本地运行

```
  # clone到本地
  https://github.com/yesrefueling88/navigation.git

  # 进去项目根目录
  cd navigation

  # 安装依赖
  yarn

  # 调试运行
  yarn dev

  # 打包发布
  yarn build
```

## License

MIT
