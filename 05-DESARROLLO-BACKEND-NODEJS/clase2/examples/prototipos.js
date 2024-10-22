'use strict'

function Persona (nombre) {
  this.nombre = nombre
  // Crea un metodo cada vez que creo una instancia
  // this.saluda = function () { console.log('Hola soy', this.nombre) }
}

const juan = new Persona('Juan')

// Solo se crea el metodo una vez
Persona.prototype.saluda = function () { console.log('Hola soy', this.nombre) }

juan.saluda()