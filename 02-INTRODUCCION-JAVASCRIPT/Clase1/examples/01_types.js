// Revisando variables
/*
Comentario en
varias lineas 
*/
console.log('Hola Keepcoding');
console.log(varVariable)

const productName = 'T-shirt';
const quantity = 1;
console.log(productName + ': ' + quantity)

let newProduct = 'Cap';
console.log(newProduct)
newProduct = 'Pants';
console.log(newProduct)

var varVariable = 'var'
console.log(varVariable)
var varVariable = 10
console.log(varVariable)
// Esta parte no es de la clase, es una prueba mia
const renderProductQuantity = () => {
  return `
    <div>
      <h1>${productName}</h1>
      <h2>quantity: ${quantity}</h2>
    </div>
  `
}

const renderNewProduct = () => {
  return `
    <div>
      <h1>${newProduct}</h1>
    </div>
  `
}

const renderBody = () => {
  return `
    ${renderProductQuantity()}
    ${renderNewProduct()}
  `    
}

document.querySelector('body').innerHTML = renderProductQuantity()

document.querySelector('body').innerHTML = renderNewProduct()

document.getElementsByTagName('body')[0].innerHTML = renderBody()
// Acaba mi prueba, sigo con la clase

// number
const secondProductQuantity = 12.212;
console.log(`type of ${secondProductQuantity} is '${typeof secondProductQuantity}'`)

const infinito = Infinity
console.log(`const infinito = Infinity;
type of ${infinito} is '${typeof infinito}'`)

// string
let message = 'Your cart is empty';
console.log(message);
message = "Your cart is full";
console.log(message);
message = "Your cart is 'empty' and \"full\" ";
console.log(message);

// template string
message = `
            Cart

No products      Keep buying
`;
console.log(message);
console.log(typeof message)

message = 'Your product is ' + productName + ' quantity ' + quantity
console.log(message)
message = `Your product is ${productName} quantity ${quantity}`
console.log(message)

// null
let stock = null;
console.log(`let stock = null;
type of ${stock} is '${typeof stock}'`)

// undefined
let fruta;
console.log(`let fruta;
type of ${fruta} is '${typeof fruta}'`)

// boolean
const discount = true;
console.log(`const discount = true;
type of ${discount} is '${typeof discount}'`)

// bigInt
const numeroMuyGrande = 901927341284601n
console.log(`const numeroMuyGrande = 901927341284601n;
type of ${numeroMuyGrande} is '${typeof numeroMuyGrande}'`)
