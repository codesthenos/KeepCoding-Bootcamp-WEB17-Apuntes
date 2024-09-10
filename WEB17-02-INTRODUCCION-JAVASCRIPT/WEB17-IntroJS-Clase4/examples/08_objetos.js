document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/eexamples/08_objetos.js</h1>
`

// objetos
// productos 1 y 2 (constantes sin relacion)
const firstProductName = 'T-shirt';
const firstProductPrice = 12;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 3;

// productos 1 y 2 representados con objetos (cada produto tiene un valor para sus propiedades)
const firstProdcut = {
  // propiedades: valores
  name: '',
  aviable: false,
  size: ['S', 'M', 'L', 'XL']
}

// modificamos propiedad name de nuestro objeto
firstProdcut.name = firstProductName

// creamos propiedades para nuestro objeto
firstProdcut.price = firstProductPrice
firstProdcut.quantity = firstProductQuantity
// para acceder a una propiedad con caracteres raros, usamos []
firstProdcut['country-store'] = 'ES'

// creamos el producto 2 del tiron
const secondProduct = {
  name: secondProductName,
  price: secondProductPrice,
  quantity: secondProductQuantity,
  aviable: true,
  size: ['S', 'M', 'L'],
  // para definir una propiedad con caracteres raros usamos ''
  'country-store': 'ES'
}

// si la propiedad esta asignada a una variable, tambien accedo por corchetes
let key = 'quantity'
console.log('quantity: ', firstProdcut[key])
key = 'price'
console.log('price: ', firstProdcut[key])

console.log('firstProduct: ', firstProdcut)
console.log('secondProduct: ', secondProduct)

// ejemplo de uso practico de la propiedad como variable
const getProductAttribute = (product, key) => {
  return product[key]
}

console.log('first product country-store: ', getProductAttribute(firstProdcut, 'country-store'))
console.log('second product price: ', getProductAttribute(secondProduct, 'price'))

// metemos un objeto dentro de un objeto
secondProduct.attributes = {
  color: 'red',
  material: 'cotton',
}

console.log('secondProduct.attributes: ', secondProduct.attributes)
console.log('secondProduct.attributes.material: ', secondProduct.attributes.material)

// Object.keys(), para sacar lista de las propiedades de primer nivel de un objeto, solo propiedades, no el valor
const listOfAttributes = Object.keys(secondProduct)
console.log(listOfAttributes)
console.log(Object.keys(secondProduct.attributes))

const products = [
  firstProdcut,
  {
    name: 'shoes',
    price: 12
  }
]

console.log(products[1])

const shows = [
  {
    id: 1,
    name: 'Under the dome',
    genres: ['Drama', 'Science-Fiction', 'Thriller']
  },
  {
    id: 2,
    name: 'Game of thrones',
    genres: ['Drama', 'Thriller'],
    season: {
      title: 'season 1'
    }
  }
]

const firstShow = shows[0]
const nameFirstShow = firstShow.name
console.log(nameFirstShow)

for (let show of shows) {
  console.log('name:', show.name, '\ngenre:', show.genres[0])
}