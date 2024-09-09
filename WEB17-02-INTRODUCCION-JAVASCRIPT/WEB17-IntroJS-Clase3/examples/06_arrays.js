document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>example/06_arrays.js</h1>
`

// Arrays (listas)
const myProducts = ['Tv', 'PC', 'Cap']
console.log(myProducts)
console.log(myProducts.length)

// Acceder a elementos
const elemento1 = myProducts[0]
console.log(elemento1)
const elementoFinal = myProducts[myProducts.length - 1]
console.log(elementoFinal)

// Añadir elementos
// Añade elemento al final de la lista
myProducts.push('nuevo elemento')
console.log(myProducts)
console.log(myProducts.length)
// Añade elemento al principio de la lista
myProducts.unshift('primer elemento')
console.log(myProducts)
console.log(myProducts.length)

// Eliminar elementos
// elimina el primer elemento de la lista
myProducts.shift()
console.log(myProducts)
console.log(myProducts.length)
// elimina el ultimo elemento de la lista
myProducts.pop()
console.log(myProducts)
console.log(myProducts.length)

// Modificar un elemento de la lista
myProducts[1] = 'Elemento modificado'
console.log(myProducts)

// Hacer copias de la lista
// Mala forma, ya que creo una referencia que apunta a la lista inicial, por lo que al mutar la copia, muto la original
const myProductsCopy1 = myProducts
myProductsCopy1.push('copiando asi, al modificar una lista, modifico las dos')
console.log('myProducstCopy1', myProductsCopy1)
console.log('myProducts', myProducts)
// Mejor forma, con destructuracion const copy = [...original]
const myProducstCopy2 = [...myProducts]
myProducstCopy2.push('elemento solo en copia 2')
console.log('myProducstCopy2', myProducstCopy2)
console.log('myProducts', myProducts)
// Igual que el anterior pero usando el concat()
const myProducstCopy3 = [].concat(myProducts)
myProducstCopy3.pop()
console.log('myProducstCopy3', myProducstCopy3)

// Usando structuredclone, que hace una copia hasta las raices
const myProducstCopy4 = structuredClone(myProducts)


// Funcion (ejemplo) para incluir una elemento a una lista
const addProduct = (list, element) => {
  const updatedList = [...list]
  updatedList.push(element)
  return updatedList
}
const listUsingFunction = addProduct(myProducts, 'element added from function')
console.log('listUsingFunction', listUsingFunction)


// arrays de arrays
// convertir lista a otro tipo (string, number, ...)