const app = getApp();
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    tabBar: Array,
    currentTab: Number,
  },
  data: {
    currentTab: 0,
    navScrollLeft: 0,
    yesSrc:"images/link1.png",
    noSrc: "images/link.png",
    appleXHeight: 290,
    height: 246,
  },
  methods: {
    switchNav(event) {
      var cur = event.currentTarget.dataset.current;
      // console.log(event)
      //每个tab选项宽度占1/5
      var singleNavWidth = this.data.windowWidth / 5;
      //tab选项居中                            
      this.setData({
        navScrollLeft: (cur - 2) * singleNavWidth
      })
      if (this.data.currentTab == cur) {
        return false;
      } else {
        this.setData({
          currentTab: cur
        })
      }
      this.triggerEvent('tabBar', {
        curNumber: cur,
      })
    },
    scrollHeight(){ 
      var that = this;
      wx.getSystemInfo({
        success: function (res) {    
          const phoneModel = app.globalData.phoneModel
          console.log('首页', phoneModel)
          const appleXHeight = that.data.appleX //外部控制高度 (iPhoneX)
          const height = that.data.height //外部控制高度
          switch (phoneModel) {
            case "iPhoneX":
              that.setData({
                scroll_height: res.windowHeight - res.windowWidth / 750 * appleXHeight
              })
              return;
            default:
              that.setData({
                scroll_height: res.windowHeight - res.windowWidth / 750 * height
              })
          }
          
        },
      })
    }
  },
  ready() {
    this.scrollHeight();
  }
})
