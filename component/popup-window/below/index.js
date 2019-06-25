import {
  popupWindow
} from '../popup-window.js'
Component({
  behaviors: [popupWindow],
  properties: {
  },
  data: {
  },
  methods: {
    guanPopupWindow() {
      var that = this;
      setTimeout(function () {
        that.triggerEvent('popupWindow', {})
      }, 500)
      that.setData({
        animationHidden: true,
      })
    },
  }
})