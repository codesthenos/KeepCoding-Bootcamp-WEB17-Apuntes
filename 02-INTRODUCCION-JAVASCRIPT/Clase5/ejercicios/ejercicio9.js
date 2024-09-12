document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/ejercicios/ejercicio9.js</h1>
`

const products = [
  { id: 'p001', name: 'T-shirt', price: 20, quantity: 2 },
  { id: 'p002', name: 'Cap', price: 5, quantity: 3 },
  { id: 'p003', name: 'Pants', price: 50, quantity: 1 }
]

const cart = () => {
  let products = []

  const addProduct = ({ name, price, quantity }) => {
    products = [...products, { name, price, quantity }]
    // products = products.concat({ name, price, quantity })
    // products.push({ name, price, quantity })
  }

  const addProducts = (productsList) => {
    productsList.map(({ name, price, quantity }) => products.push({ name, price, quantity }))
  }

  const getProducts = () => {
    return products
  }

  return { addProducts, getProducts }
}

const cart1 = cart()
const cart2 = cart()

cart1.addProducts(products)
cart2.addProducts(products.filter(product => product.name !== 'Cap'))

const cart1Products = cart1.getProducts()
const cart2Products = cart2.getProducts()

console.log('cart 1:\n', cart1Products)
console.log('cart 2:\n', cart2Products)