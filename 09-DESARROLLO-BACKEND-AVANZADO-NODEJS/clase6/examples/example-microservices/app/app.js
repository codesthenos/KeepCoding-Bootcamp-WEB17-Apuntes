// esta aplicacion necesita un microservicio de conversion de moneda

// cote es un bus de mensajes
import cote from 'cote'

// creo un requester de mensajes
const requester = new cote.Requester({ name: 'app' })

// evento que esta aplicacion manda al bus de mensajes (cote)
const event = {
  type: 'convertir-moneda',
  cantidad: 100,
  desde: 'USD',
  hacia: 'EUR'
}
setInterval(() => {
  // requester envia el mensaje al bus
  requester.send(event, result => {
    console.log(Date.now(), 'app obtiene resultado:', result)
  })
}, 3000)