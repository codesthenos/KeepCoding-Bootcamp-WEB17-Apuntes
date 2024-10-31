import session from 'express-session'
import MongoStore from 'connect-mongo'
import { SESSION_SECRET } from '../secret.js'

// middleware para gestionar sesiones
export const sessionMiddleware = session({
  name: 'nodeapp-session', // nombre de la cookie que se genera
  secret: SESSION_SECRET, // hace que el manejo de las sesiones sea seguro
  saveUninitialized: true, // hace que las sesiones que no han hecho peticiones esten en la Store
  resave: false, // fuerza que una sesion se guarde aunque la sesion no se haya modificado durante la peticion
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 3 },
  // Las sesiones las guardamos en MongoDB
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/cursonode'
  })
})
// middleware para linkear la info de la sesion a la VIEW
export const sessionViewsMiddleware = (req, res, next) => {
  res.locals.session = req.session
  next()
}