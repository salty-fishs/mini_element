Component({
  externalClasses: ['swiper'],
  properties: {
    banners: Array,
    swiperHeight: Number //自定义控制轮播图高度
  },
  data: {
    swiperCurrent: 0,
  },
  methods: {
    // formSubmit(e) {
    //   var form_id = e.detail.formId
    //   this.triggerEvent('formSubmit', {
    //     form_id,
    //   })
    // },
    // 轮播图
    swiperChange(e) {
      let current = e.detail.current;
      let that = this;
      that.setData({
        swiperCurrent: current,
      })
    },
    getBanner(e) {
      console.log(e)
      this.triggerEvent('banners', {
        id: e.currentTarget.dataset.index,
        applyID: e.currentTarget.id
      })
    }
  }
})
