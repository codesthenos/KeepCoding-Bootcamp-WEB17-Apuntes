import 'dotenv/config'
import amqplib from 'amqplib'

const QUEUE_NAME = 'cola-de-tareas'

// conectar con el BROKER de RabbitMQ (manejar procesos lentos)
const connection = await amqplib.connect(process.env.RABBITMQ_BROKER_URL)

// crear canal entre RabbitMQ y nuestra APP (nodeapp)
const channel = await connection.createChannel()

// asegurar que existe mi cola de entrada de mensajes
channel.assertQueue(QUEUE_NAME, {
  durable: true // la cola de mensajes sobrevive a reinicios del BROKER (si se reinicia el servidor de RabbitMQ), defaults to true
})

// suscribirnos a la cola
channel.consume(QUEUE_NAME, message => {
  const payload = JSON.parse(message.content.toString())
  // simulamos que hacemos un trabajo con el mensaje
  console.log(payload.tarea)
  // (acknowledgement) avisamos al BROKER de que hemos terminado con el mensaje para poder ir al siguiente
  channel.ack(message)
})
