const app = getApp()

Page({
  data: {
    columns: [{
      key: 'catname',
      title: '类目',
      width: 80,
      fixed: 'left',
      align: 'center'
    },
    {
      key: 'product_bar_code',
      title: '条形码',
      width: 100,
    }, {
      key: 'product_title',
      width: 200,
      fixed: 'left',
      title: '商品'
    }, {
      key: 'quantity',
      width: 50,
      title: '数量'
    }
  ],
  data: [
    {catname: 1, product_bar_code: '1234567', product_title: '可乐', quantity: '12'},
    {catname: 2, product_bar_code: '45633423', product_title: '雪碧', quantity: '23'},
    {catname: 3, product_bar_code: '3426767456', product_title: '乐事', quantity: '31'},
    {catname: 4, product_bar_code: '2345654', product_title: '香草片', quantity: '44'},
    {catname: 5, product_bar_code: '7654565', product_title: '郁金香', quantity: '55'},
    {catname: 6, product_bar_code: '345435', product_title: '可口可乐', quantity: '11'},
    {catname: 7, product_bar_code: '235436543', product_title: '爱马仕', quantity: '23'},
    {catname: 8, product_bar_code: '66543456', product_title: '古驰', quantity: '12'},
    {catname: 9, product_bar_code: '87656754', product_title: '苹果', quantity: '12'},
    {catname: 10, product_bar_code: '45678987654', product_title: '栗子', quantity: '42'},
    {catname: 11, product_bar_code: '4567765434', product_title: '可水果乐', quantity: '12'},
    {catname: 12, product_bar_code: '458765', product_title: '翅果', quantity: '42'},
    {catname: 13, product_bar_code: '34544', product_title: '香蕉', quantity: '45'},
    {catname: 14, product_bar_code: '345654324', product_title: '相机', quantity: '7'},
    {catname: 15, product_bar_code: '8986', product_title: '渔家', quantity: '8'},
    {catname: 1, product_bar_code: '1234567', product_title: '可乐', quantity: '12'},
    {catname: 2, product_bar_code: '45633423', product_title: '雪碧', quantity: '23'},
    {catname: 3, product_bar_code: '3426767456', product_title: '乐事', quantity: '31'},
    {catname: 4, product_bar_code: '2345654', product_title: '香草片', quantity: '44'},
    {catname: 5, product_bar_code: '7654565', product_title: '郁金香', quantity: '55'},
    {catname: 6, product_bar_code: '345435', product_title: '可口可乐', quantity: '11'},
    {catname: 7, product_bar_code: '235436543', product_title: '爱马仕', quantity: '23'},
    {catname: 8, product_bar_code: '66543456', product_title: '古驰', quantity: '12'},
    {catname: 9, product_bar_code: '87656754', product_title: '苹果', quantity: '12'},
    {catname: 10, product_bar_code: '45678987654', product_title: '栗子', quantity: '42'},
    {catname: 11, product_bar_code: '4567765434', product_title: '可水果乐', quantity: '12'},
    {catname: 12, product_bar_code: '458765', product_title: '翅果', quantity: '42'},
    {catname: 13, product_bar_code: '34544', product_title: '香蕉', quantity: '45'},
    {catname: 14, product_bar_code: '345654324', product_title: '相机', quantity: '7'},
    {catname: 15, product_bar_code: '8986', product_title: '渔家', quantity: '8'},
  ],
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
