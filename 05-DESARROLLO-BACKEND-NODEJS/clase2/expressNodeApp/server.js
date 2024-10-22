import express from 'express'
import { createServer } from 'node:http'

// creamos app con express
const app = express()

// definimos ruta raiz
app.get('/', (req, res, next) => {
  res.send('Hola codesthenos')
})

// arrancar el servidor
const server = createServer(app)

server.on('listening', () => {
  console.log('Servidor arrancado en\nhttp://localhost:3500')
})

server.listen(3500)