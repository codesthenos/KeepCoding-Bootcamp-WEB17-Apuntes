document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>WEB17-IntroJS-Clase3/ejercicios/ejercicio5.js</h1>
`

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN, '12']

const seedEvenAndOdd = (numberList) => {
  const evenNumbers = []
  const oddNumbers = []

  for (let index = 0; index < numberList.length; index++) {
    const element = numberList[index]

    if (!element || typeof element !== 'number') {
      continue
    } else if (element % 2 === 0) {
      evenNumbers.push(element)
    } else {
      oddNumbers.push(element)
    }
  }
  return { evenNumbers, oddNumbers } // lo sacaria con un objeto pero como no lo hemos visto lo he hecho asi
}

const { evenNumbers, oddNumbers } = seedEvenAndOdd(numbers)

console.log('evenNumber: ', evenNumbers)
console.log('oddNumbers: ', oddNumbers)