console.log('Hello world from index.js')

const a = 5

console.log('a = ' + a)

export const b = 10
// Si ejecuto esto con node, falla, si lo ejecuto en el browser no
console.log(document)
// console.log(process) --> esto en el browser falla con node no