# 前言
之前公司需求开发原生微信小程序，当需要使用table的时候，发现微信小程序没有table标签，然后就自己写了一个，
功能仿element-ui里的table
[微信小程序table代码片段](https://developers.weixin.qq.com/s/e2chKemP76jr)

![展示](http://i8.yunmayi.com/upload/2020/07/30/55d55e4cdda9685628b0de0e3ae7a46b.png)
# 使用方法
1、引入
首先在要使用的页面中的json文件中配置如下：

```sh
{
  "usingComponents": {
    "l-table": "/components/lrjTable/lrjTable"
  }
}
```

2、使用
在wxml页面需要用到的地方使用，如下：
```sh
<view>
  <l-table columns="{{columns}}" data="{{data}}" bindrowClick='onRowClick'  thead-row-class='css'></l-table>
</view>
```

### 参数


| 其他参数 | 默认 |
| ------ | ------ |
| columns | th头部展示，object{}，必填 |
| data | Array[],接收的数据列表，必填 |
| height | tbody的高度 |
| width | table宽度 |
| isBorder | 是否带有纵向边框，默认true  |
| isStripe | 是否带有斑马条纹，默认true  |
| valueCallback | 自定义返回值key，默认返回全部  |
| msg | 无数据时展示信息  |
| isFixed | 固定thead，默认true  |


**columns 对象**
| columns | 默认 |
| ------ | ------ |
| key | 对应data数据的关键词，必填 |
| title | th展示title，必填 |
| width | th自定宽度 |
| fixed | th 定位 |
| align | 默认center |
| slot | 模拟了一个按钮，但不是真的slot,只能填写action  |
| btnName | 设置slot的按钮名称  |


**事件名**
| 事件名 | 绑定事件 |
| ------ | ------ |
| onRowClick | tr绑定事件 |
| btnClick | 自定义按钮绑定事件 |


**自定义css**
| css | 默认 |
| ------ | ------ |
| thead-row-class | th自定义样式 |
| tbody-tow-class | tr自定义样式 |
| td-class | td自定义样式 |
# 联系方式
微信号： lovelirjunlove
qq: 251587868
