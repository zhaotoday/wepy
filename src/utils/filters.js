module.exports = {
  distance (value) {
    return value < 1000 ? value + 'm' : (value / 1000).toFixed(2) + 'km'
  }
}
