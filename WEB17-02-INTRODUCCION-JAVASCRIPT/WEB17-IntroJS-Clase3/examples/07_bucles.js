document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>WEB17-IntroJS-Clase3/example/07_bucles.js</h1>
`

const products = ['Cap', 'T-shirt', 'shoes', 'Tv', 'Pc']

const productMessage = (productTitle) => {
  return `Product: ${productTitle}`
}

console.log(productMessage(products[0]))

// while, do-while, for
// for example
for (let index = 1; index < 5; index++) {
  index % 2 === 0
    ? console.log('Dentro del loop, index es par, index = ', index)
    : console.log('Dentro del loop, index es impar, index = ', index)  
}
// usando un for para products
// creamos lista de productos que no queremos mostrar
const hiddenProducts = ['Tv', 'Pc']

console.log('---Usando for---')
for (let index = 0; index < products.length; index++) {
  // usamos la lista de hiddenProducts para esconder los productos que no queremos mostrar
  if (hiddenProducts.includes(products[index])) {
    console.log(productMessage('****'))
  } else {
    console.log(productMessage(products[index]))
  }
}


// Extra usando map
// La funcion, coge una lista de productos, e itrera por los productos, de cada producto, hace un console.log de la template string
console.log('---Usando map---')
const productMessageList = (productlist) =>
  productlist.map(product =>
    console.log(productMessage(product))
  )

productMessageList(products)