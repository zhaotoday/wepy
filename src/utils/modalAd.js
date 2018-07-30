import { utils } from 'mp-client'

const modalAdStorage = new utils.Storage('modalAd')

export default {
  set (value) {
    modalAdStorage.set(value)
  },
  get () {
    return modalAdStorage.get()
  },
  clear () {
    modalAdStorage.remove()
  }
}
