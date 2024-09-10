document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>05_functions_intro.js</h1>
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

// function declaration examples
function showMessage () {
  const discount = '50%'
  const message = `Oferta todo al ${discount}`
  console.log(message)
}

function sumCapTshirtPrice () {
  const tshirtPrice = 10
  const capPrice = 5
  const total = tshirtPrice + capPrice
  console.log(total)
}
// function call example
showMessage()
sumCapTshirtPrice()

// funcion con parametros
function prodcutTotalPrice (price, quantity) {
  const total = price * quantity
  return total
}
// llamada funcion con parametros
const productASubtotal = prodcutTotalPrice(productAPrice, productAQuantity)
const productBSubtotal = prodcutTotalPrice(productBPrice, productBQuantity)
const productCSubtotal = prodcutTotalPrice(productCPrice, productCQuantity)

// Arrow functions
const productTotalPriceArrow = (price, quantity) => {
  const total = price * quantity
  return total
}
// Arrow function en una linea se omiten {} y return que van implicitos
const pTPArrowOneLine = (price, quantity) => price * quantity