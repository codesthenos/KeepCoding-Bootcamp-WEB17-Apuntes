import express from 'express'
import createHttpError from 'http-errors'
import morganLogger from 'morgan'
// Controllers
import { createExample, index as home, multipleParamInRouteExample, paramInRouteExample, queryStringParamsExample, valiateQueryExampleValidation, validateQueryStringExample } from './controllers/homeController.js'
import { index as user } from './controllers/userController.js'
// Conexion base de datos
import { connectMongoose } from './lib/connectMongoose.js'

await connectMongoose()
console.log('conectado a mongodb')
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

// middleware para parsear body que viene en json
app.use(express.json())

// middleware para parsear body que viene de un formulario (url encoded)
app.use(express.urlencoded({ extended: false }))

// middleware para servir ficheros estaticos
app.use(express.static('public'))

// rutas
// raiz
app.get('/', home)
// '/param_in_route'
app.get('/param_in_route/:num?', paramInRouteExample)
// '/multiple_params_in_route' with regex validation (expresion regular)
app.get('/multiple_params_in_route/:product/size/:size([0-9]+)/color/:color', multipleParamInRouteExample)
// '/queryString'
app.get('/param_in_query', queryStringParamsExample)
// validation
app.get('/validate-queryString-example', valiateQueryExampleValidation, validateQueryStringExample)

// post
app.post('/create-example', createExample)

// /user
app.get('/user', user)

// middleware handler crea el 404 error y lo manda al siguiente middleware
app.use((req, res, next) => {
  next(createHttpError(404))
})

// middleware handler de un error que no hemos pillado en algun middleware anterior
app.use((err, req, res, next) => {
  // esto viene del error que lanzamos con express-validator (express-validator pone la propiedad 'array' al objeto 'err')
  if (err.array) {
    console.log(err.array())
    err.message = 'Inavlid request: ' + err.array().map(e => `${e.location} ${e.type} ${e.path} ${e.msg}`).join(', ')
    err.status = 422
  }

  res.status(err.status || 500)

  // set locals, DEV MODE Error details, PORDUCTION MODE not error details
  res.locals.message = err.message
  res.locals.error = process.env.NODEAPP_ENV === 'development' ? err : {}

  // render error view
  res.render('error')
})

export default app