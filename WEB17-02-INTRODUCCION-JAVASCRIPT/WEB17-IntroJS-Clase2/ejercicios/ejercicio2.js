document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>ejercicio2.js</h1>
`

const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

if (!selectedProduct) throw new Error('El producto es null o undefined')

const sanitizedSelectedProduct = selectedProduct.trim().toLowerCase()

let message = ''

if (sanitizedSelectedProduct === 't-shirt' && selectedQuantity >= 2) {
  message = 'Recibes un 10% de descuento en la segunda camiseta!'
} else if (sanitizedSelectedProduct === 'cap' && selectedQuantity >= 3) {
  message = 'Obten una gorra gratis por la compra de 3!'
} else {
  message = 'No hay promociones para esta seleccion'
}

console.log(message)