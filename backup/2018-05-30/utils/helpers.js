export default {
  /**
   * 等待 n 毫秒
   * @param {string} n 毫秒数
   * @returns {Promise}
   */
  sleep (n) {
    return new Promise(resolve => {
      setTimeout(resolve, n)
    })
  }
}
