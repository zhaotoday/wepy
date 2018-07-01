import { utils } from 'mp-client'
import wepy from 'wepy'
import map from './map'

const locationStorage = new utils.Storage('location')

export default {
  get () {
    return locationStorage.get()
  },
  set (value) {
    locationStorage.set(value)
  },
  remove () {
    locationStorage.remove()
  },
  async getCurrentLocation () {
    if (!this.get()) {
      const {longitude: lng, latitude: lat} = await wepy.getLocation()
      const getLocationRes = await map.getLocation({
        location: {lng, lat}
      })
      this.set(getLocationRes)
    }

    return this.get()
  },

  async getNearbyLocations ({keywords = '', types = '', location = null} = {}) {
    location = location || await this.getCurrentLocation()

    return await map.getNearbyLocations({keywords, types, location})
  },

  async secureClear () {
    return new Promise(async (resolve, reject) => {
      const getSettingRes = await wepy.getSetting()

      if (getSettingRes.authSetting['scope.userLocation']) {
        this.remove()
        resolve()
      } else {
        try {
          await wepy.authorize({scope: 'scope.userLocation'})
          this.remove()
          resolve()
        } catch (e) {
          reject(e)
        }
      }
    })
  }
}
