import express from 'express'

// creamos app con express
const app = express()

// definimos ruta raiz
app.get('/', (req, res, next) => {
  throw new Error('Error FORZADO')
  res.send('<h1>Hola codesthenos</h1>')
})

// middleware para manejar el error 'errorHandler'
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message)
  console.error(err.message)
})

export default app