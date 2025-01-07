import createHttpError from 'http-errors'
import jwt from 'jsonwebtoken'

export function guard (req, res, next) {
  // sacar el tokenJWT de la request, cabecera, body o query-string
  const tokenJWT = req.get('Authorization') || req.body.jwt || req.query.jwt
  // si no tengo token --> error
  if(!tokenJWT) {
    next(createHttpError(401, 'no token provided'))
    return
  }

  // compruebo que el token es valido
  jwt.verify(tokenJWT, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      next(createHttpError(401, 'invalid token'))
      return
    }
    // hacemos que los siguiente middlewares tengan acceso al payload._id (id del user)
    req.apiUserId = payload._id
    next()
  })
}