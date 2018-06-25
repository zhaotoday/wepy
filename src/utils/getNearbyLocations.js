import wepy from 'wepy'
import consts from './consts'
import location from './location'

export default async () => {
  const locationValue = location.get()

  const aroundRes = await wepy.request({
    url: `${consts.AMAP_WEB_SERVICE_BASE_URL}/place/around`,
    data: {
      key: consts.AMAP_WEB_SERVICE_KEY,
      location: `${locationValue.lng},${locationValue.lat}`,
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
        cityCode: locationValue.cityCode,
        address: item.name
      }
    })
}
