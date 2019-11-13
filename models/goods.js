import { HTTP } from '../api/http.js'
class GoodsModel extends HTTP {
  // 获取商品列表
  getGoodsList() {
    return this.request({
      mock: 1,
      url: '',
      data: {
        token: wx.getStorageSync('token'),
        openid: wx.getStorageSync('openId'),
      }
    })
  }
  // 获取商品详情
  getGoodsDetails() {
    return this.request({
      mock: 2,
      url: '',
      data: {
        token: wx.getStorageSync('token'),
        openid: wx.getStorageSync('openId'),
      }
    })
  }
}

export { GoodsModel }