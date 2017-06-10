import wepy from 'wepy'

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
  }
}
