import session from './session'
import apis from './apis'
import wepy from 'wepy'

export default {
  /**
   * 登陆
   * @returns {Promise}
   */
  login () {
    return new Promise(async (resolve, reject) => {
      try {
        const res = apis.login({
          params: {code: (await wepy.login())['code']}
        })

        session.set(res.signture)
        resolve(res)
      } catch (err) {
        reject(err)
      }
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
