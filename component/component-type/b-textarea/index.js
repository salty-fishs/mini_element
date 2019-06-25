// component/component-type/b-textarea/index.js
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
    value:"请输入内容"
  },

  /**
   * 组件的方法列表
   */
  methods: {

    showText(){
      this.setData({
        hiddenText:true,
        automaticFocus:true
      })
    },
    cancelTheInput(){
      this.setData({
        hiddenText: false,
        automaticFocus: false
      })
    },
    toObtain(e){
      console.log()
      this.setData({
        value: e.detail.value,
      })
    }
  }
})
