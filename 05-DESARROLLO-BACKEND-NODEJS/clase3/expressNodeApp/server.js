import express from 'express'
import debugLib from 'debug'
import { createServer } from 'node:http'

const debug = debugLib('expressnodeapp:server')

const port = process.env.PORT || 3200

// creamos app con express
const app = express()

// definimos ruta raiz
app.get('/', (req, res, next) => {
  res.send('<h1>Hola codesthenos</h1>')
})

// definimos un server 
const server = createServer(app)

// hacer que el servidor escuche el evento listening
server.on('listening', () => { debug(`Servidor arrancado en\n\nhttp://localhost:${port}\n`) })

// arrancar el servidor
server.listen(port)