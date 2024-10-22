'use strict'

function creaVehiculo (nombre) {

  let numRuedas = 4

  return {
    saluda: function () { console.log('Hola soy', nombre, 'y tengo', numRuedas, 'ruedas') },
    setNumRuedas: function (valor) { numRuedas = valor }
  }
}

const coche = creaVehiculo('coche')
coche.setNumRuedas(8)
setTimeout(coche.saluda, 1000)