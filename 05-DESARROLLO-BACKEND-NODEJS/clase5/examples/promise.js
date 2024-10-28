'use strict'

// funcion que devuelve una promesa
function sleep (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms === 3500) reject()
      else resolve()
    }, ms)
  })
}

const promise = sleep(2000)

console.log(promise)

// .then cuando la promesa usa el resolve
// .catch cuando la promesa usa el reject
// puedo poner mas .then despues d eun .catch

promise.then(() => {
  console.log('promise resolved!')
  return sleep(2000)
}).then(() => {
  console.log('Another promise resolved')
  throw new Error('ERROR FORZADO DESPUES DE LA SEGUNDA PROMESA')
  return sleep(2000)
}).then(() => {
  console.log('Another promise resolved')
}).catch(err => {
  console.log('Hubo un error: ' + err.message)
  return sleep(3500)
}).catch(e => console.log('promise REJECTED'))
.finally(() => {
  console.log('.finally END OF THE promises')
})

const promesa2 = sleep(5000)
const promesa3 = sleep(7000)
const promesa4 = sleep(10000)

Promise.all([promesa2, promesa3, promesa4]).then(([promise2Result, promise3Result, promise4Result]) => {
  console.log('TERMINA EL Promise.all')
})