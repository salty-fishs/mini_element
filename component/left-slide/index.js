// component/left-slide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    delBtnWidth: 160,
    data: [{ content: "1", right: 0 },],
    isScroll: true,
    windowHeight: 100,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    drawStart: function (e) {
      // console.log("drawStart");  
      var touch = e.touches[0]

      for (var index in this.data.data) {
        var item = this.data.data[index]
        item.right = 0
      }
      this.setData({
        data: this.data.data,
        startX: touch.clientX,
      })

    },
    drawMove: function (e) {
      var touch = e.touches[0]
      var item = this.data.data[e.currentTarget.dataset.index]
      var disX = this.data.startX - touch.clientX

      if (disX >= 20) {
        if (disX > this.data.delBtnWidth) {
          disX = this.data.delBtnWidth
        }
        item.right = disX
        this.setData({
          isScroll: false,
          data: this.data.data
        })
      } else {
        item.right = 0
        this.setData({
          isScroll: true,
          data: this.data.data
        })
      }
    },
    drawEnd: function (e) {
      var item = this.data.data[e.currentTarget.dataset.index]
      if (item.right >= this.data.delBtnWidth / 2) {
        item.right = this.data.delBtnWidth
        this.setData({
          isScroll: true,
          data: this.data.data,
        })
      } else {
        item.right = 0
        this.setData({
          isScroll: true,
          data: this.data.data,
        })
      }
    },

    delItem: function (e) {

    }
  }
})
