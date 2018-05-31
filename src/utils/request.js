import wepy from 'wepy'
import consts from './consts'
import Hashes from 'jshashes'

export default async (
  {
    url = '',
    method = 'GET',
    data = {},
    requiresAuth = true
  } = {}
) => {
  const key = consts.SIGN_KEY
  const deviceType = consts.DEVICE_TYPE
  const nonce = Math.random().toString(36).substr(7)
  const timestamp = new Date().getTime()

  data = Object.assign({deviceType, nonce, timestamp}, data)

  const text = Object.keys(data)
    .sort((key1, key2) => key1.charAt(0) > key2.charAt(0) ? 1 : -1)
    .map(key => data[key])
    .join('')
  const sign = new Hashes.MD5().hex(text + key)

  return wepy.request({
    url: consts.API_URL + url,
    method,
    header: {
      'content-type': 'application/x-www-form-urlencoded;'
    },
    data: Object.keys(data)
      .map(key => `data[${key}]=${data[key]}`)
      .join('&') + `&sign=${sign}`
  })
}
