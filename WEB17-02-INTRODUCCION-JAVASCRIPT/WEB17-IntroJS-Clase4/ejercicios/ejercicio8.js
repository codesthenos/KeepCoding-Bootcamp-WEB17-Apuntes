document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/ejercicios/ejercicio8.js</h1>
`

const csvProducts = 'T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google'

const processCSV = (csv) => {
  const procducts = []
  const lines = csv.split('\n')
  for (let line of lines) {
    const [name, price, store] = line.split(',')
    procducts.push({
      name: name,
      price: parseInt(price),
      store: store
    })
  }

  return procducts
}

const [product1, product2, product3, product4, product5] = processCSV(csvProducts)

console.log('csvProducts:', csvProducts)
console.log('product1:', product1)
console.log('product2:', product2)
console.log('product3:', product3)
console.log('product4:', product4)
console.log('product5:', product5)