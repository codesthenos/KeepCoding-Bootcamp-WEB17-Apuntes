document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>ejercicios/ejercicio4.js</h1>
`
// Paso 1, crea un array vacio llamado numeros
const numeros = []

// Paso 2, Agrega los numeros del 1 al 5 por entre el numero 3 y 4 la palabra keepcoding
numeros.push(1, 2, 3, 'keepcoding', 4, 5)

// Paso 3, muestra en consola numeros
console.log(numeros)

// Paso 4 detecta si dentro del array esta la palabra keepcoding, si lo esta muestra en consola, este array no solo tiene numeros
const isKeepcodingInNumeros = numeros.includes('keepcoding')

if (isKeepcodingInNumeros) console.log('Este array no solo tiene números')

// Paso 5 Agrega el numero 10 al principio del array
numeros.unshift(10)

// Paso 6, Imprime el contenido del array en la consola
console.log(numeros)

// Paso 7, utiliza indexOf para encontrar el indice de keepcoding
const keepcodingIndex = numeros.indexOf('keepcoding')

// Paso 8, elimina el elemento keepcoding usando el indice anterior
numeros.splice(keepcodingIndex, 1)

// Paso 9, imprime por consola el array
console.log(numeros)

// Paso 10, imprime la longitud del array
console.log(numeros.length)