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

    return (item => ({
      lng,
      lat,
      province: item.province,
      district: item.district,
      city: item.city,
      cityCode: item.citycode,
      address: item.district + item.township + item.streetNumber.street + item.streetNumber.number
    }))(regeoRes.data.regeocode.addressComponent)
  },

  async getNearbyLocations ({location, keywords, types = '120201|120302|141200'} = {}) {
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
          district: item.adname,
          name: item.name,
          address: item.address
        }
      })
  }
}
