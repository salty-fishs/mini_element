Page({
  data: {
    price:100,
    price1:20,
    price2: 20,
    counts:0,
    counts1: 0,
    counts2: 0,
    // 切换
    navData: [
      {
        text: '首页'
      },
      {
        text: '健康'
      },
    
    ],
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  bindPlus:function(e){
    this.setData({
      counts: e.detail.counts
    })
  },
  bindPlus1: function (e) {
    this.setData({
      counts1: e.detail.counts
    })
  },
  bindPlus2: function (e) {
    this.setData({
      counts2: e.detail.counts
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})