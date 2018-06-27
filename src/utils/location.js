import { utils } from 'mp-client'
import wepy from 'wepy'
import consts from './consts'

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
      const getLocationRes = await wepy.getLocation()
      const regeoRes = await wepy.request({
        url: `${consts.AMAP_WEB_SERVICE_BASE_URL}/geocode/regeo`,
        data: {
          key: consts.AMAP_WEB_SERVICE_KEY,
          location: `${getLocationRes.longitude},${getLocationRes.latitude}`
        }
      })

      const locationValue = (address => ({
        lng: getLocationRes.longitude,
        lat: getLocationRes.latitude,
        province: address.province,
        city: address.city,
        cityCode: address.citycode,
        address: address.district + address.township + address.streetNumber.street + address.streetNumber.number
      }))(regeoRes.data.regeocode.addressComponent)

      this.set(locationValue)
    }

    return this.get()
  },

  async getNearbyLocations () {
    const {lng, lat, cityCode} = await this.getCurrentLocation()
    const aroundRes = await wepy.request({
      url: `${consts.AMAP_WEB_SERVICE_BASE_URL}/place/around`,
      data: {
        key: consts.AMAP_WEB_SERVICE_KEY,
        location: `${lng},${lat}`,
        types: '190000'
      }
    })

    return aroundRes.data.pois
      .filter((value, index) => index <= 2)
      .map(item => {
        const [lng, lat] = item.location.split(',')

        return {
          lng,
          lat,
          province: item.pname,
          city: item.cityname,
          cityCode,
          address: item.name
        }
      })
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
