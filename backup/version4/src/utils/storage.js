import wepy from 'wepy'

/**
 * 本地存储
 */
export default class Storage {
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
    wepy.setStorageSync(this.key, value)
  }

  /**
   * 获取 storage
   * @returns {string}
   */
  get () {
    return wepy.getStorageSync(this.key) || ''
  }

  /**
   * 移除 storage
   * @returns {string}
   */
  remove () {
    wepy.removeStorageSync(this.key)
  }

  /**
   * 清空 storage
   */
  clear () {
    wepy.clearStorageSync()
  }
}
