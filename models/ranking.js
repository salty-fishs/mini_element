import { HTTP } from '../api/http.js'
class RankingModel extends HTTP {
  // 获取当月排名
  getCurrentMonth() {
    return this.request({
      mock: 1,
      url: '',
      data: {
        token: wx.getStorageSync('token'),
        openid: wx.getStorageSync('openId'),
      }
    })
  }
  // 获取当月排名  用户自己的排名
  getCurrentMonthUser() {
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

export { RankingModel }