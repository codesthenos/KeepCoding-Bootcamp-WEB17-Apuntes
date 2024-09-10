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

console.log(firstProdcut)
console.log(secondProduct)