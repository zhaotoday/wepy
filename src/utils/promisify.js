export default fn => {
  return options => new Promise((resolve, reject) => {
    fn({
      ...options,
      success: resolve,
      fail: reject
    })
  })
}
