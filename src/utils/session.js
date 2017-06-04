import wepy from 'wepy'

const KEY = 'third_session'

export default {
  /**
   * 设置 session
   * @param {string} value session 值
   */
  set (value) {
    wepy.setStorageSync(KEY, value)
  },

  /**
   * 获取 session
   * @returns {string}
   */
  get () {
    return wepy.getStorageSync(KEY) || ''
  }
}
