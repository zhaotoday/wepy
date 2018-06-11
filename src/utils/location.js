import Storage from './storage'

const location = new Storage('location')

module.exports = {
  set (value) {
    location.set(value)
  },
  get () {
    return location.get()
  }
}
