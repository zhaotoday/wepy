import wepy from 'wepy'
import consts from './consts'
import location from './location'

export default async () => {
  if (!location.get()) {
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

    location.set(locationValue)
  }

  return location.get()
}
