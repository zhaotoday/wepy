import wepy from 'wepy'

const DURATION = 30000

export default {
  success (title) {
    wepy.showToast({
      title,
      image: '/images/icons/message/success.png'
    })
  },
  error (title) {
    wepy.showToast({
      title,
      image: '/images/icons/message/error.png'
    })
  },
  warn (title) {
    wepy.showToast({
      title,
      image: '/images/icons/message/warn.png'
    })
  },
  loading (title = '加载中...') {
    wepy.showToast({
      title,
      icon: 'loading',
      duration: DURATION
    })
  },
  hide () {
    wepy.hideToast()
  }
}
