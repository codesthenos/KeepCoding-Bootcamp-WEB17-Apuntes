document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/examples/11_map_filter.js</h1>
`

const numbers = [1, 2, 3, 4, 5]

// sacar lista de numbers x 2 sin map
let numbersX2SIN = []
for (number of numbers) numbersX2SIN.push(number * 2)
console.log('numberX2SIN:', numbersX2SIN)

// sacar lista de numbers x 2 con map creando funcion dentro del map
// elements.map(element => element) === elements
const numberX2 = numbers.map(number => number * 2)

console.log('numberX2:', numberX2)

// Usando el map, pero sin crear la funcion dentro del map
// la funcion que le pasamos a map puede tener de 0 a 3 parametros
// lista.map(funcion(elemento, indice, lista))
const multiplicarX2 = (element) => {
  return element * 2
}

const numberX2FuncionExterna = numbers.map(multiplicarX2)
console.log('numberX2FuncionExterna:', numberX2FuncionExterna)