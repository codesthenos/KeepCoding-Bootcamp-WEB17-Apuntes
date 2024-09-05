document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>03_control.js</h1>
`

const firstProductName = 'T-shirt';
const firstProductPrice = 12;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 3;

let message = ''
// if | else if | else
if (firstProductPrice > secondProductPrice) {
  message = 'El primer item es mas caro que el segundo'
} else if (firstProductPrice === secondProductPrice) {
  message = 'El primer item cuesta lo mismo que el segundo'
}else {
  message = 'El primer item es mas barato que el segundo'
}

console.log(message)

// operador ternario (condicion ? resultadoSiTrue : resultadoSiFalse)
let message2 = ''
message2 = firstProductName === secondProductName ? 'Son el mismo producto' : 'Son productos diferentes'

console.log(message2)

const sameName = firstProductName === secondProductName
const samePrice = firstProductPrice === secondProductPrice
message2 = sameName && samePrice ? 'Se llaman igual y valen lo mismo' : 'O no se llaman o igual o no valen lo mismo'

console.log(message2)

// extra: con el operador && podemos simular un if
let message3 = 'No son el mismo producto'
message3 = firstProductName === secondProductName && 'Son el mismo producto'
// si true, message3 = 'Son el mismo producto', si false, message3 = false (machaco su string inicial)

console.log(message3)

const day = 'Monday'
// switch case (poco uso)
switch (day) {
  case 'Monday':
    console.log(`Es ${day}, hay clase`)
    break
  case 'Tuesday':
    console.log(`Es ${day}, hay clase`)
    break
  case 'Thursday':
    console.log(`Es ${day}, hay clase`)
    break
  default:
    console.log(`Es ${day}, no hay clase`)
    break
}