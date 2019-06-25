// component/add-and-subtract/index.js
Component({
  
  /**
   * 组件的属性列表
   */
  properties: {
    price: Number,//单价
    counts:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 1,
    minusStatus: 'disable',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindMinus: function () {
      var num = this.data.num;
      if (num > 1){
        if (num > 1) {
          num--;
        }
        var minusStatus = num > 1 ? 'normal' : 'disable';
        var counts = this.properties.counts - this.properties.price
        this.setData({
          num: num,
          minusStatus: minusStatus,
          counts,
        })
        this.triggerEvent('plus', {
          counts: this.properties.counts, //
        })
      }
    },
    /*点击加号*/
    bindPlus: function () {
      var num = this.data.num;
      num++;
      var minusStatus = num > 1 ? 'normal' : 'disable';
      var counts = this.properties.price * num
      this.setData({
        num: num,
        minusStatus: minusStatus,
        counts
      })
      this.triggerEvent('plus', {
        counts: this.properties.counts,
      })
    },

  }
})
