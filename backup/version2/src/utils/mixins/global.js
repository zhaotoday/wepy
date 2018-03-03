import wepy from 'wepy'
import wx from '../wx'
import apis from '../apis'
import storage from '../storage'

export default class extends wepy.mixin {
  data = {
    user: null
  }

  /**
   * 检查是否已登录且已获取用户信息
   * 请在调用接口之前做此检查
   * 因为接口依赖了登录相关信息
   */
  async login () {
    // 未登录
    if (!storage.session.get()) {
      // 小程序登陆
      const wxLoginRes = await wepy.login()

      // 服务端登录
      const serverLoginRes = await apis.login({
        params: {code: wxLoginRes.code}
      })

      // 保存 third session
      storage.session.set(serverLoginRes.signture)

      // 获取用户信息
      const userInfoRes = await wepy.getUserInfo()

      // 保存用户信息至服务端
      apis.saveUser({
        params: {
          encrypted: userInfoRes.encryptedData,
          iv: userInfoRes.iv
        }
      })

      return (await apis.getUser()).user
    } else {
      return storage.user.get() || (await apis.getUser()).user
    }
  }

  async onShow () {
    try {
      const loginRes = await this.login()
      console.log(loginRes)

      storage.user.set(loginRes)
      this.user = loginRes
      this.$apply()
    } catch (err) {
      wx.navigateTo({
        url: '/pages/error/index'
      })
    }
  }
}
