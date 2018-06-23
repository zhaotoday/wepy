import wepy from 'wepy'
import { utils, helpers } from 'mp-client'

let timer

export default class extends wepy.mixin {
  data = {
    // 页面是否已显示
    shown: false
  }

  async onShow () {
    const whiteList = ['pages/login/index', 'pages/content/index']

    utils.currentPages.addWhiteList(whiteList)
    utils.currentPages.storePages()

    /* global getCurrentPages */
    const currentPages = getCurrentPages()
    const currentPage = currentPages[currentPages.length - 1]

    if (!whiteList.includes(currentPage.route)) {
      this.$parent.globalData.stopping = false

      timer = setTimeout(() => {
        this.$parent.globalData.stopping = true
        this.$apply()
      }, 500)
    }

    await helpers.sleep(100)

    this.shown = true
  }

  onHide () {
    clearTimeout(timer)
  }
}
