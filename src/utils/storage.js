import wepy from 'wepy'

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
    wepy.setStorageSync(this.key, value)
  }

  /**
   * 获取 storage
   * @returns {string}
   */
  get () {
    return wepy.getStorageSync(this.key) || ''
  }
}

export default {
  session: new Storage('third_session'),
  user: new Storage('user')
}
