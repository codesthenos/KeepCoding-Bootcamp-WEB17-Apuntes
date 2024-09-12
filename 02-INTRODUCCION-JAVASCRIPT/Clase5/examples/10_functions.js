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