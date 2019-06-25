// component/choose/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selected:Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooses() {
      this.setData({
        selected: !this.data.selected,
      })
      console.log(this.data.selected)
    },
  
  }
})
