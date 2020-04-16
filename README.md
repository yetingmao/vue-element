<!--
 * @Description: 
 * @Autor: yetm
 * @Date: 2020-03-23 15:05:36
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-16 10:29:11
 -->
## VUE项目模板

### 项目组成
#### vue+elementui+vuex+axios

###  项目结构
```
── dist // build生成文件 
├── public //  公共目录
├── src // 源码目录 
│ ├── api // 请求接口 
│ │ ├── index.js     // api导出
│ ├── assets // 静态资源 
│ ├──├── images // 图片 
│ ├──├── styles //css基本样式 
│ ├── components //  公共组件
│ ├── config //  全局配置
│ │ │ ├── index.js // 
│ │── layout  // 页面布局
│ │── router  // 路由
│ │── store  // 状态管理
│ │── util  // 工具
│ │ ├── index.js     // 方法导出
│ │ ├── request.js     // fetch请求方法
│ │── views  // 页面
│ ├── app.vue //  
│ ├── main.js //  入口文件
└── package.json   //项目说明
└── readme.md  // 此文件
└── vue.config.js //vue配置
└── yarn.lock  // lock
```
## Project setup
```
yarn install
```
### 配置
#### 在项目config下去配置
```
 const Layout = {
    navMenu: "top", //导航在顶部还是在左侧  top | left
    footer: true, //是否需要底部
};
```


### 开发运行
```
yarn dev
```

### 打包生产
```
yarn build
```

