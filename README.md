 # 轱辘 Vue UI 组件
 [![Build Status](https://travis-ci.org/tomgao1/xiaolunzi-demo.svg?branch=master)](https://travis-ci.org/tomgao1/xiaolunzi-demo)
 ## 介绍

 这是我在学习Vue过程中做的一个UI框架，希望对你有用
 ## 

 ## 开始使用




 1.添加CSS样式，使用本框架前，请在CSS中开启 border-box

 ```
 *::before{box-sizing:border-box;}
*{box-sizing:border-box;}
 *::after{box-sizing:border-box;}
 ```
 IE 8 及以上浏览器支持此样式

 
 你还需要设置默认颜色变量（后续会改为scss变量）
 ```
 html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
IE 15 及以上浏览器都支持此样式。

2.安装gulu
```
npm i --save xialunzi
```
3.引入 gulu
```
import {Button, ButtonGroup, Icon} from 'xiaolunzi'
import 'xialunzi/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```
4.引入svg symbols
```
<script src="//at.alicdn.com/t/font_1923645_6m9lcit3ki.js"></script>
```

   ## 文档

   ## 提问

   ## 变更记录

   ## 联系方式

   ## 贡献代码