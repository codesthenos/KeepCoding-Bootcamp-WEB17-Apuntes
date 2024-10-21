'use strict'
// Sin callback
function escribeTras2Segundos1 (texto, texto2) {
  setTimeout(function () {
    console.log(texto)
    setTimeout(function(){
      console.log(texto2)
    }, 2000)
  }, 2000)
}
escribeTras2Segundos1('Texto1', 'Texto2')

// Con callback
function escribeTras2Segundos1Callback (texto, callback) {
  setTimeout(function () {
    console.log(texto)
    callback()
  }, 2000)
}
escribeTras2Segundos1Callback('Texto1Callback', function () {
  escribeTras2Segundos1Callback('Texto2Callback', function () {
    console.log('fin')
  })
})

// Ejercicio final del loop con Callbacks
function escribeTras2Segundos (text, callback) {
  setTimeout(function () {
    callback(text)
  }, 2000)
}
const textos = ['Hola Sara', 'que tal?', 'TE AMO', 'MUCHISIIIMO']
function escribeTras2SegundosLista (lista, index = 0) {
  if (index < lista.length) {
    escribeTras2Segundos(lista[index], function(text) {
      console.log(text)
      escribeTras2SegundosLista(lista, index + 1)
    })
  } else {
    console.log('SARA TE AMOOOOO')
  }
}
escribeTras2SegundosLista(textos)