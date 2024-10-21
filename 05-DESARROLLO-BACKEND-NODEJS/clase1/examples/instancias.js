'use strict'

// crear una funcion para usarla como constructora de otras
function Fruta (nombre) {
  // this contiene el objeto que se esta creando, y que va a devolver new Fruta ()
  this.nombre = nombre
  this.desc = `${this.nombre} es una fruta`
  this.descLog = function () { console.log('Hola soy', this.nombre) }
}

const limon = new Fruta('LEMON')
console.log(limon)
limon.descLog()