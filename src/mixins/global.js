import wepy from 'wepy'
import consts from '../utils/consts'
import { utils } from 'mp-client'

let timer

export default class extends wepy.mixin {
  data = {
    loaded: false
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
  }

  onHide () {
    clearTimeout(timer)
  }

  methods = {
    imageError (e) {
      const { type, keys } = e.currentTarget.dataset.options
      const url = `${consts.IMAGE_CDN_URL}/components/image/${type}.jpg`

      switch (keys.length) {
        case 1:
          this[keys[0]] = url
          break
        case 2:
          this[keys[0]][keys[1]] = url
          break
        case 3:
          this[keys[0]][keys[1]][keys[2]] = url
          break
        case 5:
          this[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]] = url
          break
        default:
          break
      }
    }
  }
}
