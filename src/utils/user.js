import wepy from 'wepy'
import request from './request'

const KEY = 'user'

export default {
  /**
   * 设置 user
   * @param {string} value session 值
   */
  set (value) {
    wepy.setStorageSync(KEY, value)
  },

  /**
   * 获取 user
   * @returns {object}
   */
  get () {
    return wepy.getStorageSync(KEY) || null
  },

  /**
   * 保存至服务器
   * @returns {Promise}
   */
  setToServer () {
    return new Promise((resolve) => {
      wepy.getUserInfo({
        success (res) {
          request.GET({
            path: '/wx/user/save',
            params: { encrypted: res.encryptedData, iv: res.iv }
          }).then((res) => {
            resolve(res)
          })
        }
      })
    })
  },

  /**
   * 从服务器获取
   * @returns {Promise}
   */
  getFromServer () {
    return new Promise((resolve) => {
      request.GET({
        path: '/wx/user/get'
      }).then((res) => {
        resolve(res)
      })
    })
  }
}
