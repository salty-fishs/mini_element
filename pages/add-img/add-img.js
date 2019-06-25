// pages/add-img/add-img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 图片剪切   改变组件内export_scale的值 * width 等于图片的大小
    width: 250, //图片剪切宽度
    height: 188, //图片剪切高度
    src: '',
    hiddem: false,
    pet_avatar: '',
    imageCropperHidden: true,
    imgSrc: '',
    imageCropperHidden: true,
    newArr: [],
    imgArray: [],
  },
  getAgin() {

    this.cropper.upload();
  },
  getShutDown() {
    console.log(11111)
    this.setData({

      imageCropperHidden: !this.data.imageCropperHidden,
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
        if (success.c == 0) {
          console.log(success, '文件是否')
          var imgSrc = JSON.parse(res.data).d
          var imgArray = that.data.imgArray.concat(imgSrc)
          let newArr = imgArray.map((item, index) => {
            return Object.assign({
              img: item,
              id: index + 1,
            })
          })
          that.setData({
            // imgSrc,
            newArr,
            imgArray,
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
  // 图片

  deleteaddress(e) {
    console.log(e)
    console.log(this.data.newArr)
    console.log(this.data.imgArray)
    var that = this
    var id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示',
      content: '确认删除该图片吗？',
      success(res) {
        if (res.confirm) {
          let newArr = that.data.newArr;
          let imgArray = that.data.imgArray //同步 newArr 数组的长度
          let newImgArray = [] //同步 newArr 数组的长度
          let newallData = [];
          for (var i in newArr) {
            var item = newArr[i];
            var itemImg = imgArray[i]; //
            if (item.id != id) {
              newImgArray.push(itemImg) //
              newallData.push(item);
            }
            console.log(newImgArray)
          }
          that.setData({
            newArr: newallData,
            imgArray: newImgArray,  //
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

})