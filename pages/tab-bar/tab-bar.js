const util = require('../../utils/util.js')
Page({
  data: {
    // tabBar
    currentTab:0,
    tabBar: [
      {
        text: '首页',
        yesSrc: 'images/link1.png',
        noSrc: 'images/link.png'
      },
      {
        text: '活动',
        yesSrc: 'images/link1.png',
        noSrc: 'images/link.png'
      },
      {
        text: '商城',
        yesSrc: 'images/link1.png',
        noSrc: 'images/link.png'
      },
      {
        text: '我的',
        yesSrc: 'images/link1.png',
        noSrc: 'images/link.png'
      },
    ],
  },
   // 防止多次点击跳转
  tap:util.throttle(function(e) {
    console.log(this)
    console.log(e)

  }, 2000),
  onLoad: function (options) {
  },
  onShow: function () {

  },
  // TabBar 切换获取值
  goTabBar(e){
    console.log(e.detail.curNumber)
  },
  
})