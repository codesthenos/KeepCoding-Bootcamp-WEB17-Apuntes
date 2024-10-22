// muestra el sistema operativo
console.log(process.platform)
// llama a una funcion cuando el proceso acaba
process.on('exit', () => { console.log('END') })
// log que se muestra antes que el anterior para mostrar el funcionamiento anterior
setTimeout(() => {
  console.log('Hola')
  // corto el proceso forzadamente
  process.exit()  
  // log que no se muestra ya que corto el proceso antes
  console.log('NO SE MUESTRA')
}, 2000)