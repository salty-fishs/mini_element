var app = getApp();
Component({
  properties: {
    title: String,
    hidden: Boolean,
    votsHidden: Boolean,
  },
  data: {
  },
  methods: {
    getReturn: function () {
      console.log(22222)
      wx.navigateBack({
        delta: 1
      })
    },
    getReturn1() {
      this.triggerEvent('return', {
      })
    },
    // 判断手机类型
    phoneModel() {
      const that = this
      const phoneModel = app.globalData.phoneModel
      console.log(phoneModel,'手机型号nav')
      switch (phoneModel) {
        case "iPhoneX":
          that.setData({
            isIphoneX: true,
          })
          return
      }
    },
  },
  ready() {
    this.phoneModel();

  }
})
