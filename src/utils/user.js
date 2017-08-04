import wepy from 'wepy'

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
  }
}
