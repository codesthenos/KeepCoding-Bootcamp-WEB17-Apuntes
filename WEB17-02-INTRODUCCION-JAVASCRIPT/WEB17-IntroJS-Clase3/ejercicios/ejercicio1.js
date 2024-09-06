document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>ejercicio1.js</h1>
`

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

const subtotal = (price, quantity) => {
  return price * quantity
}

const subtotalA = subtotal(productAPrice, productAQuantity)
const subtotalB = subtotal(productBPrice, productBQuantity)
const subtotalC = subtotal(productCPrice, productCQuantity)

const sumaTotal = subtotalA + subtotalB + subtotalC

let consoleLog = ''

if (sumaTotal < 50) {
  consoleLog = 'Puedes agregar mas productos'
} else if (sumaTotal <= 100) { // como si es menor que 50 entra en el if de ariba, no hace falta marcarlo aqui
  consoleLog = 'Estas cerca de tu limite de compra'
} else {
  consoleLog = 'Has alcanzado el limite de tu compra'
}

console.log(consoleLog)