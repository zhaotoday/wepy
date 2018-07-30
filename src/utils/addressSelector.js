import { utils } from 'mp-client'

const addressSelectorStorage = new utils.Storage('addressSelector')

export default {
  set (value) {
    addressSelectorStorage.set(value)
  },
  get () {
    return addressSelectorStorage.get()
  },
  clear () {
    addressSelectorStorage.remove()
  }
}
