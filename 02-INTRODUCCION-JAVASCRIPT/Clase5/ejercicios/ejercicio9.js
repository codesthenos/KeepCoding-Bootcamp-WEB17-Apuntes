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

  const addProdcuts = (productsList) => {
    productsList.map(product => products.push(product))
  }

  const getProducts = () => {
    return products
  }

  return { addProdcuts, getProducts }
}

const cart1 = cart()

cart1.addProdcuts(products)

console.log(cart1.getProducts())