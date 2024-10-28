function sleep (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms === 3500) reject()
      else resolve('Hola')
    }, ms)
  })
}
async function main () {
  for (let i = 0; i < 5; i++) {
    const sleep1 = await sleep(2000)
    console.log('from main:', sleep1)
    if (i === 2) throw new Error('fallo en la tercera vuelta')
  }
}
console.log(main)
main().catch(e => console.log(e.message)).then(() => main())