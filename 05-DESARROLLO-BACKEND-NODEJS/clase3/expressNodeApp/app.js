import express from 'express'

// creamos app con express
const app = express()

// definimos ruta raiz
app.get('/', (req, res, next) => {
  res.send('<h1>Hola codesthenos</h1>')
})
export default app