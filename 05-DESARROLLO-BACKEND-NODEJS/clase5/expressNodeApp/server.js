import { createServer } from 'node:http'
import debugLib from 'debug'
import app from './app.js'

const debug = debugLib('expressnodeapp:server')

const port = process.env.PORT || 3200

// definimos un server 
const server = createServer(app)

// hacer que el servidor escuche el evento listening
server.on('listening', () => { debug(`http://localhost:${port}`) })

// hacer que el server se suscriba al evento error
server.on('error', err => console.log(err))

// arrancar el servidor
server.listen(port)