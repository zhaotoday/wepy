import { utils } from 'mp-client'

const location = new utils.Storage('location')

module.exports = {
  set (value) {
    location.set(value)
  },
  get () {
    return location.get()
  }
}
