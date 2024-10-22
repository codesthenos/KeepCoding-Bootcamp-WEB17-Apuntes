'use strict'

const moduloCalculadora = require('./calculadora.js')
const moduloCalculadora2 = require('./calculadora.js')
const { suma } = require('./calculadora.js')
console.log(moduloCalculadora)
console.log(moduloCalculadora.suma(5, 8))
console.log(moduloCalculadora.resta(5, 8))
// solo cambio el .nombre de moduloCalculadora, y esto me cambia tambien el del moduloCalculadora2
moduloCalculadora.nombre = 'sharp'
console.log(moduloCalculadora.nombre)
// NO MUESTRA casio, tambien muestra sharp
console.log(moduloCalculadora2.nombre)
console.log(suma(5, 8))