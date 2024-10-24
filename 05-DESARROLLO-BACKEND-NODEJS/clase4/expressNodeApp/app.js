import express from 'express'
import createHttpError from 'http-errors'
import morganLogger from 'morgan'
// Controllers
import { index  as home } from './controllers/homeController.js'
import { index as user } from './controllers/userController.js'

/**
 *  Application ROUTES
 */

// creamos app con express
const app = express()

// definimos variables locales en las VISTAS
app.locals.appName = 'Codesthenos - NodeApp'

// decimos a express en que carpeta tenemos las VISTAS
app.set('views', 'views')

// decimos a express el VIEW ENGINE que usamos para cargar las vistas
app.set('view engine', 'ejs')

// middleware de morgan para los logs
app.use(morganLogger('dev'))

// middleware para servir ficheros estaticos
app.use(express.static('public'))

// middleware handler de la ruta raiz
app.get('/', home)

// middleware handler de la ruta /user
app.get('/user', user)

// middleware handler crea el 404 error y lo manda al siguiente middleware
app.use((req, res, next) => {
  next(createHttpError(404, 'ERROR 404'))
})

// middleware handler de un error que no hemos pillado en algun middleware anterior
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(`<h1>${err.message}</h1>`)
})

export default app