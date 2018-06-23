import { utils } from 'mp-client'

const locationStorage = new utils.Storage('location')

module.exports = {
  set (value) {
    locationStorage.set(value)
  },
  get () {
    return locationStorage.get()
  }
}
