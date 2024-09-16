document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/examples/13_async_await.js</h1>
`

// asincronia
console.log(`     ---------ASINCRONIA---------     `)

// callbacks
console.log(`   -----CALLBACKS-----   `)

const cargarDatosWebCb = (cb) => {
  setTimeout(() => {
    const datos = [1, 2, 3]
    cb(datos)
  }, 1000)
}

const cargarDatosDetalleCb = (cb) => {
  setTimeout(() => {
    const datos = [1, 2, 3]
    cb(datos)
  }, 1000)
}

const cargarDatosUsuarioCb = (cb) => {
  setTimeout(() => {
    const datos = [1, 2, 3]
    cb(datos)
  }, 1000)
}

let loading = true

cargarDatosWebCb((datos) => {
  console.log(datos)
  cargarDatosDetalleCb(() => {
    cargarDatosUsuarioCb(() => {
      loading = false
      console.log(false)
    })
  })
})

const callback = () => {
  console.log('AFTER 2 SECONDS... HI ASYNCHRONY')
}
setTimeout(callback, 2000)
// promises
const cargarDatosWeb = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datos = [1, 2, 3]
      resolve(datos)
    }, 1000)
  })
}

const cargarDatosDetalle = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datos = [1, 2, 3]
      resolve(datos)
    }, 1000)
  })
}

const cargarDatosUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datos = [1, 2, 3]
      resolve(datos)
    }, 1000)
  })
}

cargarDatosWebCb((datos) => {
  console.log(datos)
  cargarDatosDetalleCb(() => {
    cargarDatosUsuarioCb(() => {
      loading = false
      console.log(false)
    })
  })
})

cargarDatosWeb()
  .then(() => cargarDatosDetalle())
  .then(() => cargarDatosUsuario())
  .then(() => {
    loading = false
    console.log('loading:', loading)
    console.log('PROMISE')
  })
  .catch(() => {
    console.log('Error')
  })

// async/await
const main = async () => {
  try {
    await cargarDatosWeb()
    await cargarDatosDetalle()
    await cargarDatosUsuario()
    loading = false
    console.log('LOADING:', loading)
    console.log('ASYNC/AWAIT')
  } catch (error) {
    console.log(error)
  }
}
await main()
console.log(`       --------BYE BYE SYNCHRONY--------       `)