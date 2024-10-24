import express from 'express'
import createHttpError from 'http-errors'
import morganLogger from 'morgan'

// creamos app con express
const app = express()

// middleware de morgan para los logs
app.use(morganLogger('dev'))

// middleware handler de la ruta raiz
app.get('/', (req, res, next) => {
  res.send('<h1>Hola codesthenos</h1>')
})

// middleware handler de la ruta /user
app.get('/user', (req, res, next) => {
  res.send('<h1>USER</h1>')
})

// middleware handler crea el 404 error y lo manda al siguiente middleware
app.use((req, res, next) => {
  next(createHttpError(404, 'ERROR 404'))
})

// middleware handler de un error que no hemos pillado en algun middleware anterior
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(`<h1>${err.message}</h1>`)
})

export default app