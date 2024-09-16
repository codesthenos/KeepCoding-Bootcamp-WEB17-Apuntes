document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/ejercicios/modules/main.js</h1>
`
// forma 1 (default)
import miCalculadora, { defaultValue, message, suma10 as suma } from './utils.js'
// forma 2 (sin default)

const count1 = miCalculadora()
count1.sumar(12)
count1.dividir(2)
console.log('count1.total:', count1.total())
console.log('defaultValue:', defaultValue)
console.log('message:', message)
console.log('veinte:', suma(10))
