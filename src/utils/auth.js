import wepy from 'wepy'
import consts from './consts'
import request from './request'
import Storage from './storage'

// third session
const wxLoginSession = new Storage('wxLoginSession')
const userInfo = new Storage('userInfo')
const accessToken = new Storage('accessToken')

export default {
  /**
   * 获取 session
   * @returns {string}
   */
  getSession () {
    return wxLoginSession.get()
  },

  /**
   * 设置 session
   */
  setSession (value) {
    wxLoginSession.set(value)
  },

  /**
   * 获取用户信息
   * @returns {Object}
   */
  getUserInfo () {
    return userInfo.get()
  },

  /**
   * 设置用户信息
   */
  setUserInfo (value) {
    userInfo.set(value)
  },

  /**
   * 获取授权相关信息
   * @returns {Promise}
   */
  async getAccessToken () {
    if (!accessToken.get()) {
      const takeAccessRes = await request({
        url: 'authInfo/takeAccess',
        method: 'POST',
        data: {
          deviceType: consts.DEVICE_TYPE,
          nonce: Math.random().toString(36).substr(7),
          timestamp: new Date().getTime()
        }
      })

      accessToken.set(takeAccessRes.key)
    }

    return accessToken.get()
  },

  /**
   * 检查登录状态，未登录则跳转到登录页面
   * @returns {Promise}
   */
  async checkLogin () {
    // 已授权获取用户信息
    if (this.getUserInfo()) {
      try {
        await wepy.checkSession()
      } catch (e) {
        // session 失效则重新登录
        this.login()
      }
    } else {
      wepy.navigateTo({url: '/pages/login/index'})
    }
  },

  /**
   * 登录
   * @returns {Promise}
   */
  async login () {
    const getAccessTokenRes = await this.getAccessToken()
    const wxLoginRes = await wepy.login()
    const {nickName: nickname, avatarUrl: avatar, gender = ''} = this.getUserInfo()

    await request({
      url: 'thirdplatform/wechatAppAuth',
      method: 'POST',
      data: {
        key: getAccessTokenRes.key,
        code: wxLoginRes.code
      }
    })

    return await request({
      url: 'user/loginWithWechatInfo',
      method: 'POST',
      data: {
        key: getAccessTokenRes.key,
        nickname,
        avatar,
        gender
      }
    })
  }
}
