import wx from 'wx'

/**
 * 存储类
 */
class Storage {
  /**
   * 构造方法
   * @param key {string} 键
   */
  constructor (key) {
    this.key = key
  }

  /**
   * 设置 storage
   * @param {string} value 值
   */
  set (value) {
    wx.setStorageSync(this.key, value)
  }

  /**
   * 获取 storage
   * @returns {string}
   */
  get () {
    return wx.getStorageSync(this.key) || ''
  }

  /**
   * 移除 storage
   * @returns {string}
   */
  remove () {
    wx.removeStorageSync(this.key)
  }
}

export default {
  clear () {
    wx.clearStorageSync()
  },
  session: new Storage('third_session'),
  user: new Storage('user')
}
