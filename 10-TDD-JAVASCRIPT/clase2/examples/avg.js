export function avg(array) {
  // if (array.length === 0) {
  //   return NaN
  // }
  // let sum = 0
  // array.forEach(element => {
  //   sum += element
  // })
  // return sum / array.length
  return array.reduce((acc, el) => acc + el, 0) / array.length
}
