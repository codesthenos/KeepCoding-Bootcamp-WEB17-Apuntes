function suma (a, b, callback) {
  const resultado = a + b
  callback(resultado)
}
suma(3, 4, function (resultado) { console.log(`sumado!, resultado = ${resultado}`) })

function sumaRara (a, b, callback) {
  const resultado = a + b
  return callback(resultado)
}
const suma3y4 = sumaRara(3, 4, function (resultado) { 
  return `sumado!, resultado sumaRara = ${resultado}`
})
console.log(suma3y4)