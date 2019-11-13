Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 切换
    tList: [{
      name: "菜单1",
      page: 0
    },
    {
      name: "菜单2",
      page: 0
    },
    ],
    currentType: 0,
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.clientHeight()
  },
  // 点击tab切换 
  swichNav(e) {
    var currentNum = e.currentTarget.dataset.current
    if (this.data.currentType == currentNum) return;
    this.setData({
      currentType: currentNum,
      currentTab: currentNum,
    })
    //获取点击的id值
    var id = currentNum
  },
  // 滑动切换
  bindChange(res) {
    var currentNum = res.detail.current
    this.setData({
      currentType: currentNum,
      currentTab: currentNum,
    })
  },
  // 获取当前屏幕的可视高度
  clientHeight() {
    let that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        // 获取可使用窗口宽度
        let clientHeight = res.windowHeight;
        // 获取可使用窗口高度
        let clientWidth = res.windowWidth;
        // 算出比例
        let ratio = 750 / clientWidth;
        // 算出高度(单位rpx)
        let height = clientHeight * ratio;
        /** 
         * height 屏幕可视高度
         * 66 其他内容的高度
         * **/
        let switchHeight = height - 66
        // 设置高度
        that.setData({
          height: height,
          switchHeight: switchHeight,
        });
      }
    });
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