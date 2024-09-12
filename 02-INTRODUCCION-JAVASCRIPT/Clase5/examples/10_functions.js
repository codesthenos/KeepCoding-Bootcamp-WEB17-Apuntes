document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/examples/10_functions.js</h1>
`

const sum = (valor1, valor2) => {
  const op = valor1 + valor2
  return op
}
const cinco = sum(2,3)
console.log('sum(2,3) = ', cinco)

// Funciones definidas dentro de funciones (Closures) (clases en version funcional, Counter es la clase, increment y getCount metodos)
const counter = () => {
  let count = 0

  const increment = () => {
    count++
  }

  const getCount = () => {
    return count
  }

  return {
    increment,
    resultado: getCount
  }
}
// creo 'jugador1 y jugador2' que tienen funciones para incrementar un contador y para mostrar el resultado
const jugador1 = counter()
console.log(jugador1)
const jugador2 = counter()
// con un bucle le pongo a jugador1 una puntuacion de 10
for (let i = 0; i < 10; i++) jugador1.increment()
// con un bucle le pongo a jugador 2 una puntuacion de 5
for (let i = 0; i < 5; i++) jugador2.increment()

// meto puntuaciones de ambos jugadores en variables
const contadorJugador1 = jugador1.resultado()
const contadorJugador2 = jugador2.resultado()

// creo mensaje del resultado final
const resultado = `PUNTUACION
JUGADOR 1: ${contadorJugador1}
JUGADOR 2: ${contadorJugador2}`
// muestro el mensaje
console.log(resultado)

// Funciones como parametro de otras funciones (Callback)
// sin usar funciones como parametro
const operationsSIN = (num1, num2, operation) => {
  if (operation === 'resta') return num1 - num2
  if (operation === 'suma') return num1 + num2
}
console.log('operationsSIN(1, 2, "resta":)', operationsSIN(1, 2, 'resta'))
console.log('operationsSIN(1, 2, "suma":)', operationsSIN(1, 2, 'suma'))
// con funciones como parametro y retorno de llamada de la funcion como parametro
// creamos funcion que recibe una funcion como parametro (operationFn)
const operations = (num1, num2, operationFn) => {
  return operationFn(num1, num2)
}

// creamos funciones suma y resta que son las funciones que operations va a recibir
const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2

// creamos constantes suma12 y resta12 llamando a la funcion operations usando suma y resta respectivamente
const suma12 = operations(1, 2, suma)
const resta12 = operations(1, 2, resta)

console.log('operations(1, 2, suma): ', suma12)
console.log('operations(1, 2, resta): ', resta12)