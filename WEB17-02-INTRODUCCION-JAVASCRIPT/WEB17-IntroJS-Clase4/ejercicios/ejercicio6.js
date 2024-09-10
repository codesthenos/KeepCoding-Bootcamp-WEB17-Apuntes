document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/ejercicios/ejercicio6.js</h1>
`

const bidimensionalArray = [
  ['-', '-', '*', '-', '-'],
  ['-', '*', '*', '*', '-'],
  ['*', '*', '*', '*', '*']
]
console.log(bidimensionalArray)

const arrayOfArraysToArrayOfStrings = (arrayOfArrays) => {
  const arrayOfStrings = []
  for (let rowIndex = 0; rowIndex < arrayOfArrays.length; rowIndex++) {
    const row = arrayOfArrays[rowIndex].join('')
    arrayOfStrings.push(row)
  }
  return arrayOfStrings
}
const unidimensionalArray = arrayOfArraysToArrayOfStrings(bidimensionalArray)

const templateStringFromArray = (array) => {
  let templateString = ''
  for (let i = 0; i < array.length; i++) {
    templateString = `${templateString}${array[i]}\n`
  }
  return templateString
}

console.log(templateStringFromArray(unidimensionalArray))

const arrayOfArraysToTemplateString = (arrayOfArrays) => {
  let templateString = ''
  for (let rowIndex = 0; rowIndex < arrayOfArrays.length; rowIndex++) {
    const row = arrayOfArrays[rowIndex].join('')
    if (rowIndex === arrayOfArrays.length - 1) {
      templateString = `${templateString}${row}`
    } else {
      templateString = `${templateString}${row}\n`
    }
  }
  return templateString
}

const result = arrayOfArraysToTemplateString(bidimensionalArray)

console.log(result)