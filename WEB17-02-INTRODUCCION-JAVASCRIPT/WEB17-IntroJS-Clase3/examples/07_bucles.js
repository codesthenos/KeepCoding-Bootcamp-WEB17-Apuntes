document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>WEB17-IntroJS-Clase3/example/07_bucles.js</h1>
`

const products = ['Cap', 'T-shirt', 'shoes']

const productMessage = (productTitle) => {
  return `Product: ${productTitle}`
}

console.log(productMessage(products[0]))

// while, do-while, for
for (let index = 0; index < 10; index++) {
  console.log('Dentro del loop, index = ', index)
}


// Extra usando map
// La funcion, coge una lista de productos, e itrera por los productos, de cada producto, hace un console.log de la template string
const productMessageList = (productlist) =>
  productlist.map(product =>
    console.log(`Product: ${product}`)
  )

productMessageList(products)