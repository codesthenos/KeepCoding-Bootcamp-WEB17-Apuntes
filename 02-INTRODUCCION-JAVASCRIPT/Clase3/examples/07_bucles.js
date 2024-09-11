document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>WEB17-IntroJS-Clase3/example/07_bucles.js</h1>
`

const products = ['Cap', 'T-shirt', 'shoes', 'Tv', 'Pc']
// creamos lista de productos que no queremos mostrar
const hiddenProducts = ['Tv', 'Pc']

const productMessage = (productTitle) => {
  // vemos si el producto esta en la lista de hidden para no mostrarlos
  if (hiddenProducts.includes(productTitle)) return 'Hidden product: ****'
  return `Product: ${productTitle}`
}

console.log(productMessage(products[0]))

// while, do-while, for (do-while muy muy poco usado, while muy poco usado, for poco usado)
// for example
for (let index = 1; index < 5; index++) {
  index % 2 === 0
    ? console.log('Dentro del loop, index es par, index = ', index)
    : console.log('Dentro del loop, index es impar, index = ', index)  
}
// usando un for para products
console.log('---Usando for---')
for (let index = 0; index < products.length; index++) {
  console.log(productMessage(products[index]))
}

// while example
let i = 0
while (i < 2) {
  console.log(i)
  i++
}
// usamos while para products
console.log('---Usando while---')
let index = 0
while (index < products.length) {
  console.log(productMessage(products[index]))
  index++
}
// otro ejemplo de while
// pide productos hasta que no devuelvo nada o devuelvo no
while (true) {
  const info = prompt('Dame un producto')
  if (info === null || info === '' || info.trim().toLowerCase() === 'no') break
  products.push(info)
  console.log(products)
}

// Extra usando map
// La funcion, coge una lista de productos, e itrera por los productos, de cada producto, hace un console.log de la template string
console.log('---Usando map---')
const productMessageList = (productlist) =>
  productlist.map(product =>
    console.log(productMessage(product))
  )

productMessageList(products)