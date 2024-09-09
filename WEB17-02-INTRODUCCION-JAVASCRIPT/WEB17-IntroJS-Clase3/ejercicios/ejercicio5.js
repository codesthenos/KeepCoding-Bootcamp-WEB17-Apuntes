document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>WEB17-IntroJS-Clase3/ejercicios/ejercicio5.js</h1>
`

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN]

const seedEvenAndOdd = (numberList) => {
  const evenNumbers = []
  const oddNumbers = []

  for (let index = 0; index < numberList.length; index++) {
    if (!numberList[index]) {
      continue
    } else if (numberList[index] % 2 === 0) {
      evenNumbers.push(numberList[index])
    } else {
      oddNumbers.push(numberList[index])
    }
  }
  return { evenNumbers, oddNumbers } // lo sacaria con un objeto pero como no lo hemos visto lo he hecho asi
}

const { evenNumbers, oddNumbers } = seedEvenAndOdd(numbers)

console.log('evenNumber: ', evenNumbers)
console.log('oddNumbers: ', oddNumbers)