import wepy from 'wepy'
import consts from './consts'
import session from './session'

export default {
  /**
   * 请求
   * @param {string} method 方式
   * @param {string} path 路径
   * @param {object} data 数据
   * @param {boolean} requiresAuth 是否需要传递 session
   * @returns {Promise}
   */
  _request ({method, path, data, requiresAuth = true}) {
    return new Promise((resolve, reject) => {
      if (requiresAuth) {
        data = {...data, signture: session.get()}
      }

      wepy.request({
        method,
        url: consts.REQUEST_URL + path,
        header: {
          'content-type': 'application/json'
        },
        data,
        success (res) {
          const {data} = res

          if (data.code === 0) {
            resolve(data)
          } else {
            const err = {errMsg: data.msg}
            reject(err)
          }
        },
        fail (err) {
          reject(err)
        }
      })
    })
  },

  /**
   * GET
   * @param {string} path 路径
   * @param {object} params 数据
   * @param {boolean} requiresAuth 是否需要传递 session
   * @returns {Promise}
   */
  GET ({path, params, requiresAuth}) {
    return this._request({method: 'GET', path, data: params, requiresAuth})
  },

  /**
   * POST
   * @param {string} path 路径
   * @param {object} data 数据
   * @param {boolean} requiresAuth 是否需要传递 session
   * @returns {Promise}
   */
  POST ({path, data, requiresAuth}) {
    return this._request({method: 'POST', path, data, requiresAuth})
  }
}
