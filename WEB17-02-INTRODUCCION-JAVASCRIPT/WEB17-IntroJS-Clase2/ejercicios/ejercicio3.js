document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>ejercicio3.js</h1>
`

function addSubtotalToProductList (productsList) {
  return productsList.map(product => {
    return {
      ...product,
      subtotal: product.price * product.quantity
    }
  })
}

function getTotalFromProductList (productsList) {
  return productsList.reduce((accumulator, product) => {
    return accumulator + product.subtotal
  }, 0)
}

function getMessage (total) {
  let message = total < 50 ? 'Puedes agregar mas productos' : 'Estas cerca de tu limite de compra'

  message = total > 100 ? 'Has alcanzado el limite de tu compra' : 'Estas cerca de tu limite de compra'

  return message
}

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;
// Creo Objeto que encapsula las propiedades de 'T-shirt'
const tshirtProduct = {
  name: productAName,
  price: productAPrice,
  quantity: productAQuantity
}

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;
// Creo Objeto que encapsula las propiedades de 'Cap'
const capProduct = {
  name: productBName,
  price: productBPrice,
  quantity: productBQuantity
}

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;
// Creo Objeto que encapsula las propiedades de 'Socks'
const socksProduct = {
  name: productCName,
  price: productCPrice,
  quantity: productCQuantity
}
// Meto los productos en una lista
const productsList = [ tshirtProduct, capProduct, socksProduct ]
console.log(productsList)
// Uso una funcion para incluir una nueva propiedad llamada 'subtotal' a todos los productos
const updatedProductList = addSubtotalToProductList(productsList)
console.log(updatedProductList)
// Uso una funcion que suma todas las propiedades 'subtotal' de una lista de productos
const total = getTotalFromProductList(updatedProductList)
console.log(total)
// Uso una funcion para obtener el mensaje
const message = getMessage(total)
console.log(message)