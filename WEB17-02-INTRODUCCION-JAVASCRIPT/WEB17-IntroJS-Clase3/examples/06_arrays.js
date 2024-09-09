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
myProducts.push('nuevo elemento') // puedo meter mas de un elemento a la vez
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

// Validaciones, ver si existe un elemento y metodos parecidos
// Ver en el indice esta un elemento, si el numero es -1, es que no esta
const indexOfCap = myProducts.indexOf('Cap')
console.log('indexOfCap', indexOfCap)
// Ver si un elemento esta dentro de la lista
const estaElementoEnLista = myProducts.includes('Tv')
console.log('Esta "Cap" en myProducts:', estaElementoEnLista)

// map, filter, find, reduce, some, every, reverse (toReversed), sort (toSorted)

// Convertir lista a tipo string
const csvProducts = 'T-shirt,pants,shoes,cap'
console.log(csvProducts)
// APARTE, no es de arrays, pero me parece interesante este metodo de strings
const upadtedCsvProducts = csvProducts.replace(',shoes', '')
console.log(upadtedCsvProducts)
// Ahora si, usando listas
// Convierto el string en una lista, con split
const listCsvProducts = csvProducts.split(',')
console.log(listCsvProducts)
// Encuentro el index del elemento que quiero borrar
const indexShoes = listCsvProducts.indexOf('shoes')
// Con splice, me quedo con los elementos de la lista que quiero
listCsvProducts.splice(indexShoes, 1) // indexShoes (indice en el que empiezo a eliminar), 1 (cantidad de elementos que elimino)
console.log(listCsvProducts)
// Convierto la lista en string
const upadtedCsvProductsFromList = listCsvProducts.join(',')
console.log(upadtedCsvProductsFromList)