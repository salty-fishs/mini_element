//组件的对外属性，是属性名到属性设置的映射表，属性设置中可包含三个字段， type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数
Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['class-width'],
  properties: {
    //标题列表
    tList: {
      type: Array,
      value: []
    },
    //当前tab index
    currentTab: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        this.setData({
          currentTab: newVal
        })
      }
    }
  },
  data:{
    currentType: 0,

  },
  //组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用
  methods: {
    // 内部方法建议以下划线开头
    _swichNav(e) {
      //自定义组件触发事件时，需要使用 triggerEvent 方法，指定事件名、detail对象和事件选项
      
    },
    // 点击tab切换 
    swichNav(e) {
   
      var currentNum = e.currentTarget.dataset.current
      this.triggerEvent('changeCurrent', {
        currentNum,
      })
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
      this.setData({
        currentType: res.detail.current,
        currentTab: res.detail.current,
      })
    },
    scrollHeight() {
      var that = this;
      wx.getSystemInfo({
        success: function (res) {
          

          const phoneModel = res.model
          switch (phoneModel) {
            case "iPhone X":
              console.log(1111)
              that.setData({
                scroll_height: res.windowHeight - res.windowWidth / 750 * 290
              })
              return;
            default:
              that.setData({
                scroll_height: res.windowHeight - res.windowWidth / 750 * 1030
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