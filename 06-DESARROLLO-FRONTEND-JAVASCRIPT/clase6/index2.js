import { b } from './index.js'
console.log('Hello world from index2.js')

console.log(b)
// gracias al type="module" esto da error porque los scripts no comparten las variables
console.log('console.log(a) --> ERROR a is not defined')
console.log(a)
