import http from 'node:http'
import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
  res.send('ok')
})

const server = http.createServer(app)

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})