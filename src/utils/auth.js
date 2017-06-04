import wepy from 'wepy'
import request from './request'
import session from './session'

export default {
  /**
   * 登陆
   * @returns {Promise}
   */
  login () {
    return new Promise((resolve) => {
      wepy.login({
        success (res) {
          request.GET({
            path: '/wx/login',
            params: { code: res.code },
            requiresAuth: false
          }).then((res) => {
            session.set(res.signture)
            resolve(res)
          })
        }
      })
    })
  },

  /**
   * 根据本地 session 是否存在，来判断是否已登录
   * @returns {boolean}
   */
  loggedIn () {
    return !!session.get()
  }
}
