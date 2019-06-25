// pages/cross-switch/swiper-switch/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenTrue:true,
    // 切换
    scroll_height: 100,
    status_type: [{
      name: "寄件",
      page: 0
    },
    {
      name: "处理中",
      page: 0
    },
    {
      name: "已完成",
      page: 0
    }],
    content1: [
      {
        text: []
      },
      {
        text: []
      },
      {
        text: []
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.content1
    var content1 = this.data.content1
    var name = {
      name:1111,
      age2:222
    }
    var text = content1[0].text.push(name)
    this.setData({
      content1,
    })
  },
  swichNav(e){
    console.log(e.detail.currentNum)
    var currentNum = e.detail.currentNum
    let content1 = this.data.content1
    if (currentNum === 1){
       var name = {
      name:'你',
      age2:222
    }
    var text = content1[1].text.push(name)
    this.setData({
      content1,
    })
    } else if(currentNum === 2) {
      var name = {
        name: '二',
        age2: 222
      }

      var text = content1[2].text.push(name)
      this.setData({
        content1,
      })
    }
  },  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})