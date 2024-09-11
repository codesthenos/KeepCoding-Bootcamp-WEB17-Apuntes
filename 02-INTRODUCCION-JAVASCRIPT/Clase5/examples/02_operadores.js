document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>02_operadores.js</h1>
`

const firstProductName = 'T-shirt';
const firstProductPrice = 12;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 3;

const suma = firstProductPrice + secondProductPrice
console.log(`La suma del precio de ${firstProductName}
con el precio de ${secondProductName}
es: ${suma}

'${suma} es tipo ${typeof suma}'`)

const totalFirstProduct = firstProductPrice * firstProductQuantity
const totalSecondProduct = secondProductPrice * secondProductQuantity

const sumaTotal = totalFirstProduct + totalSecondProduct
console.log(sumaTotal)

console.log(5 + 5 + '5') // --> 105 string
console.log(5 - 5 + '5') // --> 05 string
console.log('12' + '12') // --> 1212 string
console.log('12' - '12') // --> 0 number
console.log(true + true) // --> 2 number
console.log(true + false) // --> 1 number (true en numerico es 1 y false 0)
console.log(true - 2 + false + 3) // --> 1 number
console.log('value' - 12) // --> NaN number
console.log('12' + true) // --> 12true string

const modulo = 5 % 2 // --> 1 (es el resto de 5/2)
console.log(modulo)

// operadores de comparacion
  // !=/== compara solo el valor, no el tipo
console.log('12' == 12) // --> true
console.log('1' == true == 1) // --> true
  // !==/=== compara valor y tipo
console.log('12' === 12) // --> false
console.log('1' === true) // --> false
  // <=/>=
console.log(firstProductPrice > secondProductPrice) // --> false
console.log(firstProductPrice <= secondProductPrice) // --> true
  // isNaN() ya que el === NaN no funciona, da false
console.log(NaN === NaN) // --> false
console.log(isNaN(NaN)) // --> true

// operadores logicos
  // &&(and) ||(or)
console.log(firstProductPrice > secondProductPrice && firstProductQuantity < secondProductQuantity) // --> false
console.log(firstProductPrice > secondProductPrice || firstProductQuantity < secondProductQuantity) // --> true
  // !(cambia true a false y false a true)
console.log(!true) // --> false
console.log(!undefined) // --> true
console.log(!'') // --> true

// operador ','
const thirdProductName = 'Pants', thirdProductPrice = 55, thirdProductQuantity = 2 // en vez de en 3 lineas usando const en cada una de ellas
