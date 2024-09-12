document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/ejercicios/ejercicio10.js</h1>
`

/*
Ejericio Calculadora con closures

Crear una calculadora con las siguientes funciones:
*/

const calculadora = () => {
  let resultado = 0

  const sumar = (input) => {
    resultado = resultado + input
  }

  const restar = (input) => {
    resultado = resultado - input
  }

  const multiplicar = (input) => {
    resultado = resultado * input
  }

  const dividir = (input) => {
    resultado = resultado / input
  }

  const total = () => {
    return resultado
  }

  return { sumar, restar, multiplicar, dividir, total }
}

// Copiado de Javier mi compi de clase
const calculadoraRapida = () => {
  let resultado = 0

  return {
    sumar: (input) => { resultado += input },
    restar: (input) => { resultado -= input },
    multiplicar: (input) => { resultado *= input },
    dividir: (input) => { resultado /= input },
    total: () => resultado
  }
}

const miCalculadora = calculadoraRapida();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16