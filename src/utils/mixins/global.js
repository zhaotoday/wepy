import wepy from 'wepy'
import consts from '../consts'
import request from '../request'
import Storage from '../storage'

// third session
const wxLoginSession = new Storage('wx_login_session')

export default class extends wepy.mixin {
  /**
   * 获取授权相关信息
   * @returns {Promise}
   */
  getAccessToken () {
    return request({
      url: 'authinfo/takeAccess',
      method: 'POST',
      data: {
        deviceType: consts.DEVICE_TYPE,
        nonce: Math.random().toString(36).substr(7),
        timestamp: new Date().getTime()
      }
    })
  }

  /**
   * 是否已登录
   * @returns {Promise}
   */
  async loggedIn () {
    const wxCheckSessionRes = await wepy.checkSession()

    // 未登录或登录失效
    return wxLoginSession.get() && wxCheckSessionRes.errMsg === 'checkSession:ok'
  }

  /**
   * 检查登录状态，未登录则跳转到登录页面
   * @returns {Promise}
   */
  async checkLogin () {
    const loggedIn = await this.loggedIn()

    if (!loggedIn) {
      wepy.navigateTo({url: '/pages/login/index'})
    }
  }

  /**
   * 登录
   * @returns {Promise<void>}
   */
  async login () {
    const getAccessTokenRes = await this.getAccessToken()
    const wxLoginRes = await wepy.login()

    const loginRes = await request({
      url: 'thirdplatform/wechatAppAuth',
      method: 'POST',
      data: {
        key: getAccessTokenRes.key,
        code: wxLoginRes.code
      }
    })

    console.log(22, loginRes)
  }

  onShow () {}
}
