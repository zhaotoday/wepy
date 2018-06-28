import wepy from 'wepy'
import consts from './consts'

export default {
  async getLocation ({location} = {}) {
    const {lng, lat} = location
    const regeoRes = await wepy.request({
      url: `${consts.AMAP_WEB_SERVICE_BASE_URL}/geocode/regeo`,
      data: {
        key: consts.AMAP_WEB_SERVICE_KEY,
        location: `${lng},${lat}`
      }
    })

    return (address => ({
      lng,
      lat,
      province: address.province,
      city: address.city,
      cityCode: address.citycode,
      address: address.district + address.township + address.streetNumber.street + address.streetNumber.number
    }))(regeoRes.data.regeocode.addressComponent)
  },

  async getNearbyLocations ({location, keywords, types = ''} = {}) {
    const {lng, lat, cityCode} = location
    const aroundRes = await wepy.request({
      url: `${consts.AMAP_WEB_SERVICE_BASE_URL}/place/around`,
      data: {
        key: consts.AMAP_WEB_SERVICE_KEY,
        location: `${lng},${lat}`,
        sortrule: 'distance',
        keywords,
        types
      }
    })

    return aroundRes.data.pois
      .map(item => {
        const [lng, lat] = item.location.split(',')

        return {
          lng,
          lat,
          province: item.pname,
          city: item.cityname,
          cityCode,
          name: item.name,
          address: item.address
        }
      })
  }
}
