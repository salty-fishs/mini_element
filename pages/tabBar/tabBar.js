const util = require('../../utils/util.js')
Page({
  data: {
    // tabBar
    currentTab:0,
    tabBar: [
      {
        text: '首页',
        yesSrc: 'images/link1.png',
        noSrc: 'images/link.png'
      },
      {
        text: '活动',
        yesSrc: 'images/link1.png',
        noSrc: 'images/link.png'
      },
      {
        text: '切换',
        yesSrc: 'images/link1.png',
        noSrc: 'images/link.png'
      },
      {
        text: '活动',
        yesSrc: 'images/link1.png',
        noSrc: 'images/link.png'
      },
    ],
    // 轮播图
    banner:[
      { banner_url: 'https://pettrip.bxfzkj.cn/static/upload/15507338577.jpg'},
      { banner_url: 'http://vote.bxfzkj.cn/static/upload/15549657889.jpg' }
    ],
    // 加减操作
    price: 100,
    counts: 0, 
    totalPrice:0,

    popupWindow: true, // 弹窗
    // 图片剪切   改变组件内export_scale的值 * width 等于图片的大小
    width: 250,//图片剪切宽度
    height: 250,//图片剪切高度
    src: '',
    hiddem: false,
    pet_avatar: '',
    imageCropperHidden: true,
    imgSrc: '',
    imageCropperHidden: true,
    // 选中
    selected:true,
   
   

  },
   // 防止多次点击跳转
  tap: util.throttle(function(e) {
    console.log(this)
    console.log(e)

  }, 2000),
  onLoad: function (options) {
  },
  onShow: function () {

  },
  // TabBar 切换获取值
  goTabBar(e){
    console.log(e.detail.curNumber)
  },
  // 加减操作
  bindPlus: function (e) {
    const counts = e.detail.counts
    this.setData({
      counts,
    })
    this.totalPrice()
  },
  totalPrice(e){
    // 计算总数
    const counts = this.data.counts
    const totalPrice = counts +　3;
    this.setData({
      totalPrice,
    })
    console.log(totalPrice)
  },
  // 打开弹窗
  getPopupWindow(){
    this.setData({
      popupWindow:false,
      animationHidden:false
    })
  },
  // 关闭弹窗
  guanPopupWindow(){
    console.log(11111) 
    this.setData({
      popupWindow: true,
    })
  },
  // 剪切图片
  getLicence() {
    this.setData({
      imageCropperHidden: !this.data.imageCropperHidden,
      searchHidden: true,
    })
    this.cropper = this.selectComponent("#image-cropper");
    this.cropper.upload();
  },
  getAgin(){
  
    this.cropper.upload();
  },
  getShutDown(){
    this.setData({
      imageCropperHidden: !this.data.imageCropperHidden,
    })
  },
  getImage(e) {
    var that = this;
    var srcImg = e.detail.url
    wx.uploadFile({
      url: 'https://vote.bxfzkj.cn/wechat/upload', // 仅为示例，非真实的接口地址
      filePath: srcImg,
      name: 'file',
      formData: {
        user: 'test'
      },
      success(res) {
        var success = JSON.parse(res.data)
        console.log(success, '文件是否')
        var imgSrc = JSON.parse(res.data).d
        if (success.c == 0) {
          that.setData({
            avatarItemHidden: true,
            avatarHidden: false,
            imgSrc,
            imageCropperHidden: !that.data.imageCropperHidden,
            searchHidden: false,
          })
        } else {
          wx.showToast({
            title: success.m,
            icon: 'none'
          })
          that.setData({
            imgSrc: '',
            searchHidden: false,
          })
        }
      }
    })

  },
  cropperload(e) {
    console.log("cropper初始化完成");
  },
  loadimage(e) {
    console.log("图片加载完成", e.detail);
    wx.hideLoading();
    //重置图片角度、缩放、位置
    this.cropper.imgReset();
  },
  clickcut(e) {
    console.log(e.detail);
    //点击裁剪框阅览图片
    wx.previewImage({
      current: e.detail.url, // 当前显示图片的http链接
      urls: [e.detail.url] // 需要预览的图片http链接列表
    })
  },
  // 详情
  details(){
    
  },
  // 切换
  goswitch(){
    wx.navigateTo({
      url: '/pages/cross-switch/swiper-switch/index',
    })
  }, 
  goswitch1() {
    wx.navigateTo({
      url: '/pages/portait/index',
    })
  },
  // 用户点击右上角分享
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: "这个小程序真棒",
      path: "pages/start/start"
    }
  },
  onShow(){
    console.log(1111111)
  },
})