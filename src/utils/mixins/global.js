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
   * 检查登录状态，未登录则跳转到登录页面
   * @returns {Promise}
   */
  async checkLogin () {
    // 跳转到登录页
    const navigateToLogin = () => {
      wepy.navigateTo({url: '/pages/login/index'})
    }

    return new Promise(async (resolve, reject) => {
      if (wxLoginSession.get()) {
        try {
          await wepy.checkSession()
          resolve()
        } catch (e) {
          navigateToLogin()
          reject(e)
        }
      } else {
        navigateToLogin()
        reject({errMsg: 'wx login session is empty'})
      }
    })
  }

  /**
   * 登录
   * @returns {Promise}
   */
  async login ({userInfo = {}}) {
    const getAccessTokenRes = await this.getAccessToken()
    const wxLoginRes = await wepy.login()
    const {nickName: nickname, avatarUrl: avatar, gender = ''} = userInfo

    await request({
      url: 'thirdplatform/wechatAppAuth',
      method: 'POST',
      data: {
        key: getAccessTokenRes.key,
        code: wxLoginRes.code
      }
    })

    const loginRes = await request({
      url: 'user/loginWithWechatInfo',
      method: 'POST',
      data: {
        key: getAccessTokenRes.key,
        userInfo: {nickname, avatar, gender}
      }
    })

    wxLoginSession.set(loginRes.key)
  }

  onShow () {}
}
