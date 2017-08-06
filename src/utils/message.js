import wx from './wx'

const DURATION = 30000

export default {
  success (title) {
    wx.showToast({
      title,
      image: '/images/icons/message/success.png'
    })
  },
  error (title) {
    wx.showToast({
      title,
      image: '/images/icons/message/error.png'
    })
  },
  warn (title) {
    wx.showToast({
      title,
      image: '/images/icons/message/warn.png'
    })
  },
  loading (title = '加载中...') {
    wx.showToast({
      title,
      icon: 'loading',
      duration: DURATION
    })
  },
  hide () {
    wx.hideToast()
  }
}
