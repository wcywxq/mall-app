# 移动端商城
## 项目介绍

> 本项目前端采用`vue + vuex + vant`
> 本项目后端采用`koa2`
> 本项目数据库采用`mongodb`
> 采用前后端数据分离的方式，前端通过`ajax`方式获取后端数据；

## 项目目录：
  |-- `server`  // 服务端项目目录

    |-- `controller` // 控制器入口

    |-- `model` // 数据操作入口

    |-- `data` // 数据文件

    |-- `index.js` // 程序主入口文件

    |-- `init.js` // 数据库配置文件

    |-- `package.json` // 依赖

  |-- `market`  // 前端项目目录

    |--  `public` // 生产环境打包之后的项目包

    |--  `src` // 前端项目主要目录

      |--  `assets` // 静态资源文件夹

      |--  `components` // 组件文件夹

      |--  `mock` // mock数据文件夹

      |--  `views` // UI

      |--  `App.vue` // vue组件入口

      |--  `interface.config.js` //  接口公共配置文件

      |--  `main.js` //  程序入口

      |--  `router.js` //  路由入口

      |--  `store.js`  //  vuex

    |--  `package.json` // 依赖

    |--  `babel.config.js` // babel配置文件

    |--  `.browserslistrc` // 分享目标浏览器和nodejs版本在不同的前端工具配置文件

  |-- `test`  // 测试文件夹
## 运行
+ 前端项目：
> cd market 
> npm i 
> npm run serve
+ 后端项目：
> cd server
> npm i
> node ./index.js
