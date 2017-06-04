import wepy from 'wepy'
import auth from '../auth'
import user from '../user'

export default class testMixin extends wepy.mixin {
  data = {
    user: null
  }

  methods = {}

  onShow () {
    // 未登录
    if (!auth.loggedIn()) {
      // 执行登陆
      auth.login().then(() => {
        // 成功后，调用 wx.getUserInfo 获取用户信息，并保存到服务端
        user.setToServer().then(() => {
          // 从服务端获取用户信息，并保存到全局变量 user
          user.getFromServer().then((res) => {
            this.user = res.user
            this.$apply()
          })
        })
      })
    } else {    // 已登录
      // 本地 user 存在
      if (user.get()) {
        // 直接获取本地 user，并保存到全局变量 user
        this.user = user.get()
      } else {
        // 否则，从服务端获取并保存到全局变量 user
        user.getFromServer().then((res) => {
          this.user = res.user
          this.$apply()
          user.set(res.user)
        })
      }
    }
  }
}
