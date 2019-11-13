import { HTTP } from '../api/http.js'
class IndexModel extends HTTP {
  // 博弈论列表
  getGame() {
    return this.request({
      mock:1,
      url: '',
      data: {
        token: wx.getStorageSync('token'),
        openid: wx.getStorageSync('openId'),
      }
    })
  }
  // 博弈论详情
  getGameDetails() {
    return this.request({
      mock: 2,
      url: '',
      data: {
        token: wx.getStorageSync('token'),
        openid: wx.getStorageSync('openId'),
      }
    })
  }
  // 博弈论详情 用户评论
  getGameDetailsUser() {
    return this.request({
      mock: 1,
      url: '',
      data: {
        token: wx.getStorageSync('token'),
        openid: wx.getStorageSync('openId'),
      }
    })
  }
}

export { IndexModel }