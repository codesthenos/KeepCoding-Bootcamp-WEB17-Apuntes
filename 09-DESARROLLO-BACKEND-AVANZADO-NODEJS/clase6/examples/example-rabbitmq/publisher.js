import 'dotenv/config'
import amqplib from 'amqplib'

const EXCHANGE_NAME = 'peticiones-de-tareas'

// conectar con el BROKER de RabbitMQ (manejar procesos lentos)
const connection = await amqplib.connect(process.env.RABBITMQ_BROKER_URL)

// crear canal entre RabbitMQ y nuestra APP (nodeapp)
const channel = await connection.createChannel()

// crear y configurar un exchange (como correos cuando envio una carta)
await channel.assertExchange(EXCHANGE_NAME, 'direct', {
  durable: true // el exchange sobrevive a reinicios del BROKER (si se reinicia el servidor de RabbitMQ), defaults to true
}) // asegura de que existe un exchange y si no existe lo crea

let keepSending = true

// publicar un mensaje
while (true) {
  const message = {
    tarea: 'enviar un email ' + Date.now()
  }

  // verificar si puedo enviar mas mensajes o tengo que esperar
  if (!keepSending) {
    await new Promise(resolve => channel.on('drain', resolve))
  }

  // returns true or false si el buffer esta lleno, si false, emit un evento 'drain' cuando esta disponible
  keepSending = channel.publish(EXCHANGE_NAME, '*', Buffer.from(JSON.stringify(message)))

  console.log(message.tarea)
  await new Promise(resolve => setTimeout(resolve, 1000))
}
