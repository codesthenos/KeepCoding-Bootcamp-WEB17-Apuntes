import http from 'node:http'
import path from 'node:path'
import express from 'express'
import { setupSocketServer } from './webSocketServer.js'

const app = express()

app.get('/', (req, res, next) => {
  res.sendFile(path.join(import.meta.dirname, 'index.html'))
})

const server = http.createServer(app)

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})

setupSocketServer(server)