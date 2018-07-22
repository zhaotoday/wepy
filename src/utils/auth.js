import wepy from 'wepy'
import { utils } from 'mp-client'
import consts from './consts'
import request from './request'

const accessToken = new utils.Storage('accessToken')
const loginToken = new utils.Storage('loginToken')
const userInfo = new utils.Storage('userInfo')

export default {
  async setAccessToken () {
    const takeAccessRes = await request({
      requiresAccess: false,
      url: 'authInfo/takeAccess',
      data: {
        deviceType: consts.DEVICE_TYPE,
        nonce: Math.random().toString(36).substr(7),
        timestamp: new Date().getTime()
      }
    })

    accessToken.set(takeAccessRes.key)
  },

  getAccessToken () {
    return accessToken.get()
  },

  setLoginToken (value) {
    loginToken.set(value)
  },

  getLoginToken () {
    return loginToken.get()
  },

  setUserInfo (value) {
    userInfo.set(value)
  },

  getUserInfo () {
    return userInfo.get()
  },

  /**
   * 检查登录状态，未登录则跳转到登录页面
   * @returns {Promise}
   */
  async checkLogin () {
    /* global getCurrentPages */
    const pages = getCurrentPages()
    const { route, options } = pages[pages.length - 1]
    const currentURL = utils.page.toURL({ route, options })

    // 已授权获取用户信息
    if (this.getUserInfo()) {
      try {
        await wepy.checkSession()
      } catch (e) {
        // session 失效则重新登录
        this.login()
      }
    } else {
      wepy.redirectTo({ url: `/pages/login/index?page=${utils.url.encode(currentURL)}` })
    }
  },

  /**
   * 登录
   * @returns {Promise}
   */
  async login () {
    const wxLoginRes = await wepy.login()
    const { nickName: nickname, avatarUrl: avatar, gender = '' } = this.getUserInfo()

    await request({
      url: 'thirdplatform/wechatAppAuth',
      data: {
        code: wxLoginRes.code
      }
    })

    return await request({
      url: 'user/loginWithWechatInfo',
      data: {
        nickname,
        avatar,
        gender
      }
    })
  },

  loggedIn () {
    return !!userInfo.get()
  }
}
