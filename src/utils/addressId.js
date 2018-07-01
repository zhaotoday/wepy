import { utils } from 'mp-client'

const addressIdStorage = new utils.Storage('addressId')

export default {
  set (value) {
    addressIdStorage.set(value)
  },
  get () {
    return addressIdStorage.get()
  }
}
