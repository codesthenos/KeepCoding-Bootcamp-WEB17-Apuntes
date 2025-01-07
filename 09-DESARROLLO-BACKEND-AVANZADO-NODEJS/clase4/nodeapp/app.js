import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import connectMongoose from './lib/connectMongoose.js'
import * as sessionManager from './lib/sessionManager.js'
import * as homeController from './controllers/homeController.js'
import * as loginController from './controllers/loginController.js'
import * as agentsController from './controllers/agentsController.js'
import upload from './lib/uploadConfigure.js'
import i18n from './lib/i18nConfigure.js'
import * as langController from './controllers/langController.js'
import * as apiAgentsController from './controllers/api/apiAgentsController.js'
import swaggerMiddleware from './lib/swaggerMiddleware.js'
import * as apiLoginController from './controllers/api/apiLoginController.js'
import * as jwtAuth from './lib/jwtAuthMiddleware.js'

await connectMongoose() // top level await
console.log('Conectado a MongoDB.')

const app = express()

app.locals.appName = 'NodeApp'

app.set('views', 'views') // views folder
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json()) // parsear el body que venga en formato JSON
app.use(express.urlencoded({ extended: false })) // parsear el body que venga urlencoded (formularios)
app.use(express.static('public'))
app.use(cookieParser())

/**
 * API routes
 */

app.post('/api/login', apiLoginController.loginJWT)
// CRUD for AGENTS
app.get('/api/agents', jwtAuth.guard, apiAgentsController.apiAgentList)
app.get('/api/agents/:agentId', jwtAuth.guard, apiAgentsController.apiAgentGetOne)
app.post('/api/agents', jwtAuth.guard, upload.single('avatar'), apiAgentsController.apiAgentNew)
app.put('/api/agents/:agentId', jwtAuth.guard, upload.single('avatar'), apiAgentsController.apiAgentUpdate)
app.delete('/api/agents/:agentId', jwtAuth.guard, apiAgentsController.apiAgentDelete)

/**
 * Website routes
 */

app.use(sessionManager.middleware, sessionManager.useSessionInViews)
// internacionalizacion mete en las vistas funciones que peudo usar como __
app.use(i18n.init)
// creo middleware para poder usar i18n con $ igual que hacia con __ por probar cosas
app.use((req, res, next) => {
  res.locals.$ = i18n.__
  res.$ = i18n.__
  next()
})
app.get('/change-locale/:locale', langController.changeLocale)

// public pages
app.get('/', homeController.index)
app.get('/login', loginController.index)
app.post('/login', loginController.postLogin)
app.all('/logout', loginController.logout)
// route to documentation
app.use('/api-doc', swaggerMiddleware)

// private pages
app.get('/agents/new', sessionManager.isLoggedIn, agentsController.index)
app.post('/agents/new', sessionManager.isLoggedIn, upload.single('avatar'), agentsController.postNew)
app.get('/agents/delete/:agentId', sessionManager.isLoggedIn, agentsController.deleteAgent)

// Examples
app.get('/param_in_route/:num?', homeController.paranInRouteExample)
app.get('/param_in_route_multiple/:product/size/:size([0-9]+)/color/:color',
  homeController.paranInRouteMultipleExample
)
app.get('/param_in_query', homeController.paramInQuery)
app.post('/create-example', homeController.createExample)
app.get('/validate-query-example',
  homeController.validateQueryExampleValidations,
  homeController.validateQueryExample
)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  // const err = new Error('404')
  // err.status = 404
  // next(err)
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {

  // validation errors
  if (err.array) {
    err.message = 'Invalid request: ' + err.array()
      .map(e => `${e.location} ${e.type} ${e.path} ${e.msg}`)
      .join(', ')
    err.status = 422
  }

  res.status(err.status || 500)

  // if error thrown from API route, respond a json
  if (req.url.startsWith('/api')) {
    res.json({ error: err.message })
  } else {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = process.env.NODEAPP_ENV === 'development' ? err : {}
  
    // render error view if error is not from API route
    res.render('error')
  }
})

export default app