document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/ejercicios/ejercicio6.js</h1>
`

const bidimensionalArray = [
  ['-', '-', '-', '-', '-'],
  ['_', '*', '*', '_'],
  ['*']
]
console.log(bidimensionalArray)

const showInConsole = (arrayOfArrays) => {
  for (let rowIndex = 0; rowIndex < arrayOfArrays.length; rowIndex++) {
    const row = arrayOfArrays[rowIndex]
    console.log(row.join(''))
  }
}
showInConsole(bidimensionalArray)