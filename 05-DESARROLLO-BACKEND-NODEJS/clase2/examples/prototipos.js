'use strict'

function Persona (nombre) {
  this.nombre = nombre
  this.apellido = 'Perez'
  // Crea un metodo cada vez que creo una instancia
  // this.saluda = function () { console.log('Hola soy', this.nombre) }
}

const juan = new Persona('Juan')

console.log('Persona.prototype', Persona.prototype)
// Solo se crea el metodo una vez
Persona.prototype.saluda = function () { console.log('Hola soy', this.nombre) }
console.log('Persona.prototype', Persona.prototype)

juan.saluda()

// Quiero hacer un tipo de OBJETOS llamdo Agente que herede de Persona

function Agente (nombre) {
  // Heredar el constructor de Persona, Como? -->
  // Ejecutar el constructor de Persona, pero con mi "this"
  // .call ejecuto una funcion reasignado el "this"
  // en este caso ejecuto la funcion de Persona con el "this" de Agente
  Persona.call(this, nombre)
}

// heredar las propiedades de Persona.prototype
const smith = new Agente('Smith')

// Agente.prototype = Persona.prototype NO SIRVE
Object.setPrototypeOf(Agente.prototype, Persona.prototype)
smith.saluda()

Agente.prototype.vuela = function () { console.log(this.nombre, 'vuela') }
console.log(Agente.prototype)
smith.vuela()

// herencia multiple

// No voy a crear en principio instancias, solo uso esto apra darle ams propiedades a Agente
function Superheroe () {
  this.corre = function () { console.log(this.nombre, 'corre') }
}
// Quiero que los agentes hereden tanto de Persona como de Superheroe
// Copio las propiedades de Superheroe a Agente
Object.assign(Agente.prototype, new Superheroe)
console.log(Agente.prototype)
smith.corre()

console.log('smith instanceof Persona?', smith instanceof Persona)
console.log('smith instanceof Agente?', smith instanceof Agente)
console.log('smith instanceof Superheroe?', smith instanceof Superheroe)