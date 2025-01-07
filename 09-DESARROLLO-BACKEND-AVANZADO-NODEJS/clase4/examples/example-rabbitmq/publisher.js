import 'dotenv/config'
import amqplib from 'amqplib'

const EXCHANGE_NAME = 'peticiones-de-tareas'

// conectar con el BROKER de RabbitMQ
const connection = await amqplib.connect(process.env.RABBITMQ_BROKER_URL)

// crear canal entre RabbitMQ y nuestra APP (nodeapp)
const channel = await connection.createChannel()

// crear y configurar un exchange (como correos cuando envio una carta)
await channel.assertExchange(EXCHANGE_NAME, 'direct', {
  durable: true // el exchange sobrevive a reinicios del BROKER (si se reinicia el servidor de RabbitMQ), defaults to true
}) // asegura de que existe un exchange y si no existe lo crea

// publicar un mensaje
const message = {
  tarea: 'enviar un email ' + Date.now()
}

channel.publish(EXCHANGE_NAME, '*', Buffer.from(JSON.stringify(message)))