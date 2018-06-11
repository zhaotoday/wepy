import wepy from 'wepy'
import consts from './consts'
import Hashes from 'jshashes'
import auth from './auth'

export default async (
  {
    url = '',
    method = 'GET',
    data = {},
    requiresAuth = false,
    requiresAccess = true,
    mock = false
  } = {}
) => {
  const header = {
    'content-type': 'application/x-www-form-urlencoded;'
  }
  const key = consts.SIGN_KEY
  const text = Object.keys(data)
    .sort((key1, key2) => key1.charAt(0) > key2.charAt(0) ? 1 : -1)
    .map(key => data[key])
    .join('')
  const sign = new Hashes.MD5().hex(text + key)
  const encryptType = 3

  if (requiresAuth) {
    await auth.checkLogin()

    Object.assign(data, {key: auth.getSession()})
  } else if (requiresAccess) {
    Object.assign(data, {key: await auth.getAccessToken()})
  }

  // mock 数据
  if (mock) {
    const mockFile = url.replace(/\//g, '.')
    const mockData = require(`../mock/${mockFile}`)

    console.log(`mock request - url: ${url}, method: ${method}, data: ${JSON.stringify(data)}`)

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData.responseContent)
      }, 100)
    })
  } else {
    const res = await wepy.request({
      url: `${consts.API_URL}/${url}`,
      method,
      header,
      data: Object.keys(data)
        .map(key => {
          if (typeof data[key] === 'object') {
            return Object.keys(data[key]).map(innerKey => `data[${key}][${innerKey}]=${data[key][innerKey]}`).join('&')
          } else {
            return `data[${key}]=${data[key]}`
          }
        })
        .join('&') + `&encryptType=${encryptType}&sign=${sign}`
    })

    const {status, responseContent} = res.data

    return new Promise((resolve, reject) => {
      if (status === 'success') {
        console.log(url, responseContent)
        resolve(responseContent)
      } else {
        reject(res)
      }
    })
  }
}
