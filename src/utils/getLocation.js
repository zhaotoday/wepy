import wepy from 'wepy'
import consts from './consts'
import location from './location'

export default async () => {
  if (!location.get()) {
    const getLocationRes = await wepy.getLocation()
    const regeoRes = await wepy.request({
      url: 'https://restapi.amap.com/v3/geocode/regeo',
      data: {
        key: consts.AMAP_WEB_SERVICE_KEY,
        location: `${getLocationRes.longitude},${getLocationRes.latitude}`
      }
    })

    location.set({
      lat: getLocationRes.latitude,
      lng: getLocationRes.longitude,
      cityCode: regeoRes.data.regeocode.addressComponent.citycode,
      address: regeoRes.data.regeocode.formatted_address
    })
  }

  return location.get()
}
