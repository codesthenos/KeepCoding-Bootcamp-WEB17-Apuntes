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
//escribeTras2SegundosLista(textos)

const persona = {
  name: 'Luis',
  surname: 'Gomez',
  fullName: function() { console.log(this.name + ' ' + this.surname) }
}
//persona.fullName()
//setTimeout(persona.fullName.bind(persona), 1999)

function Coche() {
  this.ruedas = 4;
  this.logRuedas = function() {
    console.log('tiene ' + this.ruedas);
  }
}
const coche = new Coche();
//console.log(coche.ruedas);
//coche.logRuedas();
//setTimeout(coche.logRuedas.bind(coche), 1000);

function creaAgente(name) {
  let edad = 0;
  return {
    ponNombre: function(nuevoNombre) {
      name = nuevoNombre;
    },
    leeNombre: function(){
      return name;
    },
    ponEdad: function(nuevaEdad) {
      edad = nuevaEdad;
    },
    leeEdad: function(){
      return edad;
    }
  }
}
const agente1 = new creaAgente('Thomas')
//setTimeout(function () { console.log(agente1.leeNombre()) }, 1000)
console.log(setTimeout(creaAgente.leeNombre.bind(agente1), 2000))
