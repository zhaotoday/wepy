import request from './request'
import * as consts from './consts'

export default {
  /**
   * 登陆
   * @returns {Promise}
   */
  login (options) {
    const {params} = options
    console.log(params)
    return request.GET({
      path: consts.LOGIN_API,
      params,
      requiresAuth: false
    })
  },

  /**
   * 保存用户
   * @returns {Promise}
   */
  async saveUser (options) {
    const {params} = options

    return request.GET({
      path: consts.SAVE_USER_API,
      params
    })
  },

  /**
   * 获取用户
   * @returns {Promise}
   */
  getUser () {
    return request.GET({
      path: consts.GET_USER_API
    })
  },

  /**
   * 获取广告
   * @returns {Promise}
   */
  getAds () {
    return request.GET({
      path: consts.GET_ADS_API
    })
  },

  /**
   * 获取商家列表
   * @returns {Promise}
   */
  getShops () {
    return request.GET({
      path: consts.GET_SHOPS_API
    })
  },

  /**
   * 获取商家详情
   * @returns {Promise}
   */
  getShop (options) {
    const {params} = options

    return request.GET({
      path: consts.GET_SHOP_API,
      params
    })
  }
}
