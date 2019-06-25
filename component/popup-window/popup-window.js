// js代码复用Behavior  继承与多继承
let popupWindow = Behavior({
  properties: {
    hidden: Boolean,
    animationHidden: Boolean
  },
  attached: function () {

  },

  data: {
    animationHidden: true,
  },
  methods: {
    // 关闭
    guanPopupWindow() {
      var that = this;
      setTimeout(function () {
        that.triggerEvent('popupWindow', {})
      }, 1000)

      that.setData({
        animationHidden: true,
      })

    },
    inbtn() {
      console.log()

    },
  }
})
export { popupWindow }