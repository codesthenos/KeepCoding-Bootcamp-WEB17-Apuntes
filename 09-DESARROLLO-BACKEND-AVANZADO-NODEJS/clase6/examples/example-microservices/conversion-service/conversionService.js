// micro-servicio de conversion de monedas

import cote from 'cote'

// base de datos de tasas de cambio (1 euro = x dolares) en mongo o donde sea
const tasas = {
  USD_EUR: 0.92,
  EUR_USD: 1.08
}

// creo un responder de mensajes
const responder = new cote.Responder({ name: 'conversor-de-moneda' })

// responder escucha el evento del requester
responder.on('convertir-moneda', (event, callback) => {
  // lo que hace cuando lo escucha

  // extraigo la info del evento (mensaje)
  const { cantidad, desde, hacia } = event

  console.log(Date.now(), 'peticion:', cantidad, 'de', desde, 'a', hacia)
  // consultar base de datos de tasas de cambio
  const tasa = tasas[`${desde}_${hacia}`]

  // calcular el resultado
  const resultado = cantidad * tasa

  // uso el callback para devolver el resultado
  callback(resultado)
})