import wepy from 'wepy'
import Storage from '../storage'

const KEY = 'user_info'
const userInfoStorage = new Storage(KEY)

export default class extends wepy.mixin {
  /**
   * 获取用户信息
   * @returns {Promise}
   */
  async getUserInfo () {
    const user = userInfoStorage.get()

    if (user) {
      return user
    } else {
      const getUserInfoRes = await wepy.getUserInfo()
      userInfoStorage.set(getUserInfoRes)
      return getUserInfoRes
    }
  }

  /**
   * 打开设置界面
   * @returns {Promise}
   */
  async openSetting () {
    await wepy.showModal({
      title: '提示',
      content: '为了提高用户体验，请设置小程序访问权限。',
      showCancel: false
    })
    wepy.openSetting()
  }
}
