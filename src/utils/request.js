import wepy from 'wepy'
import consts from './consts'
import Hashes from 'jshashes'

export default async (
  {
    url = '',
    method = 'GET',
    data = {},
    requiresAuth = true,
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

  // mock 数据
  if (mock) {
    const mockFile = url.replace(/\//g, '.')
    const mockData = require(`../mock/${mockFile}`)

    console.log(`mock request - url: ${url}, method: ${method}, data: ${JSON.stringify(data)}`)

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData.responseContent)
      }, 200)
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
        resolve(responseContent)
      } else {
        reject(res)
      }
    })
  }
}
