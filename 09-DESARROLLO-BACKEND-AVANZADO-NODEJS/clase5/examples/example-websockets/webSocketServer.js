import { Server } from 'socket.io'

export function setupSocketServer (httpServer) {
  const io = new Server(httpServer)

  io.on('connection', socket => {
    // ante cada conexion de un cliente:
    console.log('Nueva conexion de un cliente', socket.id)

    socket.on('chat-message', text => {
      console.log(`mensaje recibido del cliente con id ${socket.id} con el texto: "${text}"`)

      io.emit('chat-message', `Cliente con id: ${socket.id} envia: ${text}`)
    })
  })
}