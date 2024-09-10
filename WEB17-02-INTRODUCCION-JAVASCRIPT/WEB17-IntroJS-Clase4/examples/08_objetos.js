document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/examples/08_objetos.js</h1>
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
  console.log('name:',
    show.name,
    '\ngenre:',
    show.genres[0],
    `${show?.season?.title  ? '\nseason: ' + show?.season?.title : ''}`
  )
}

// borrado de propiedades
delete secondProduct.attributes
console.log(secondProduct)
// esto no borra, pero lo asignas a undefined
secondProduct.aviable = undefined // null lo asigna a null
console.log(secondProduct)

// creamos un template string con el bucle (lo que yo habia hecho ya justo arriba)
let info = ''
for (let show of shows) {
  info = info + `
  <h2>Show: ${show.name}</h2>
  <p>Genres: ${show.genres.join(' | ')}</p>
  `
}
console.log(info)
// metodo para escribir en la web (no recomendado, y he tenido que quitar el type="module" del html)
document.write(info)

// metodos Object
console.log('first product keys\n', Object.keys(firstProdcut)) // array de keys
console.log('first product values\n', Object.values(firstProdcut)) // array de values
console.log('first product keys & values\n', Object.entries(firstProdcut)) // array de [key, value], [hey, value] ...

// copia de objetos para no mutarlos como los arrays
// mal hecho, mutamos tanto user como user2
const user = {
  email: 'test@test.com',
  address: {
    street: 'test',
    number: 12
  }
}
const user2 = user
user2.email = 'test2@test.com'
user2.role = 'admin'
console.log('user', user)
console.log('user2', user2)

// forma 1 de copiarlo bien structuredClone() // COPIA TODOS LOS NIVELES SIN MUTAR EL ORIGINAL
const user3 = structuredClone(user2)
user3.email = 'test3@test.com'
user3.role = 'root'
// como la copia es profunda, solo cambio user3, no muto el resto
user3.address.street = 'Codesthenos'
user3.address.number = 44
console.log('user3:', user3)

// forma 2 de copiarlo bien {...} destructured // COPIA SOLO EL PRIMER NIVEL, EL RESTO, MUTAN EL ORIGINAL
const user4 = { ...user2 }
user4.email = 'test4@test.com'
user4.role = 'employee'
// muto todos los users, ya que el segundo nivel no esta copiado bien, esta referenciado
user4.address.street = 'Kepcoding'
user4.address.number = 23
console.log('user4:', user4)

// forma 3 de copiarlo bien JSON.parse(JSON.stringify) (legacy)
const user5 = JSON.parse(JSON.stringify(user2))
user5.email = 'test5@test.com'
user5.role = 'legacy'
console.log('user5:', user5)

// struturedClone() NO COPIA FUNCIONES, si una propiedad es una funcion da error