function avg(array) {
  if (array.length === 0) {
    return NaN
  }
  let sum = 0
  array.forEach(element => {
    sum += element
  })
  // con reduce, una linea y sin let, pero para mi, menos legible
  // const sum = array.reduce((acc, el) => acc + el, 0)
  return sum / array.length
}
module.exports = avg