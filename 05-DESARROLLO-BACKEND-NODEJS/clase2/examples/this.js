'use strict'

function Fruta (nombre) {
  // this contiene el objeto que se esta creando, y que va a devolver new Fruta ()
  this.nombre = nombre
  this.desc = `${this.nombre} es una fruta`
  this.descLog = function () { console.log('Hola soy', this.nombre) }
}

const limon = new Fruta('limon')

limon.descLog()

// si dentro del contexto en el que es llamada la funcion que usa el this, no existe
// necesitamos usar el metodo bind de las funciones, para indicar de quien es el this

// .bind(OBJETO que quiero que sea el "this")
// .bind devuelve una copia de la funcion original,
// con el "this" asignado al OBJETO

const saludaLimon = limon.descLog.bind(limon)
saludaLimon()

setTimeout(limon.descLog.bind(limon), 2000)