import { Server } from 'socket.io'
import * as sessionManager from './lib/sessionManager.js'
// hacemos esto para poder exportar io
export let io

export function setupSocketServer (httpServer) {
  io = new Server(httpServer)

  io.engine.use(sessionManager.middleware)

  io.on('connection', socket => {
    const sessionId = socket.request.session.id
    // el session ID se usa como una sala (room)
    socket.join(sessionId)
    
    console.log('Nueva conexion de un cliente', socket.id, 'y sesion', sessionId)

    socket.on('chat-message', text => {
      console.log(`mensaje recibido del cliente con id ${socket.id} con el texto: "${text}"`)

      io.emit('chat-message', `Cliente con id: ${socket.id} envia: ${text}`)
    })
  })
}