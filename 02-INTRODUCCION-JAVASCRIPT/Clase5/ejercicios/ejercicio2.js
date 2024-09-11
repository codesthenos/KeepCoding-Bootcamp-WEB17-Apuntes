document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>ejercicio2.js</h1>
`

const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

if (!selectedProduct) throw new Error('El producto es null o undefined')

const sanitizedSelectedProduct = selectedProduct.trim().toLowerCase()

const showMessage = (product, quantity) => {
  let message = ''

  if (product === 't-shirt' && quantity >= 2) {
    message = 'Recibes un 10% de descuento en la segunda camiseta!'
  } else if (product === 'cap' && quantity >= 3) {
    message = 'Obten una gorra gratis por la compra de 3!'
  } else {
    message = 'No hay promociones para esta seleccion'
  }
  return message
}
const message = showMessage(sanitizedSelectedProduct, selectedQuantity)
console.log(message)