import wepy from 'wepy'
import auth from '../auth'
import user from '../user'

export default class extends wepy.mixin {
  data = {
    user: null
  }

  /**
   * 检查是否已登录且已获取用户信息
   * 请在调用接口之前做此检查
   * 因为接口依赖了登录相关信息
   * mixin 的 methods 无法混入
   * 这应该是个 bug
   * 所以这里用的是 hack 的方式实现
   * @param {function} cb 回调函数
   */
  $nextTick = cb => {
    // 未登录
    if (!auth.loggedIn()) {
      // 执行登陆
      auth.login().then(() => {
        // 成功后，调用 wx.getUserInfo 获取用户信息，并保存到服务端
        user.setToServer().then(() => {
          // 从服务端获取用户信息，并保存到全局变量 user
          user.getFromServer().then((res) => {
            this.data.user = res.user
            // this.$apply()
            cb(res.user)
          })
        })
      })
    } else {    // 已登录
      // 本地 user 存在
      if (user.get()) {
        // 直接获取本地 user，并保存到全局变量 user
        this.data.user = user.get()
        cb(user.get())
      } else {
        // 否则，从服务端获取并保存到全局变量 user
        user.getFromServer().then((res) => {
          this.data.user = res.user
          // this.$apply()
          user.set(res.user)
          cb(res.user)
        })
      }
    }
  }

  onShow () {
    this.$nextTick((user) => {
      this.user = user
      this.$apply()
    })
  }
}
