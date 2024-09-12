document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/examples/10_functions.js</h1>
`

const sum = (valor1, valor2) => {
  const op = valor1 + valor2
  return op
}
const cinco = sum(2,3)
console.log('sum(2,3) = ', cinco)

// Funciones definidas dentro de funciones (Closures)
const counter = () => {
  let count = 0

  const increment = () => {
    count = count + 1
  }

  const getCount = () => {
    return count
  }

  return {
    increment,
    resultado: getCount
  }
}

const jugador1 = counter()
const jugador2 = counter()
jugador1.increment()
jugador1.increment()
jugador1.increment()
const result = jugador1.resultado()
console.log(result)