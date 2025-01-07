import createHttpError from 'http-errors'
import jwt from 'jsonwebtoken'
import User from '../../models/User.js'

export async function loginJWT (req, res, next) {
  try {
    const { email, password } = req.body
    // buscar el usuario en la base de datos
    const user = await User.findOne({ email: email.toLowerCase() })

    // si no lo encuentro, o la contraseña no coincide --> error
    if (!user || !(await user.comparePassword(password))) {
      next(createHttpError(401, 'invalid credentials'))
      return
    }

    // si lo encuentro y coincide la contraseña, firmo y emito un JWT
    // se puede usar sin el callback del final de forma sincrona
    /*
      const tokenJWT = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' })
      res.json({ tokenJWT })
    */
    // o de manera asincrona usando el callback despues del objeto de opciones
    jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '2d'
    }, (error, tokenJWT) => {
      if (error) {
        next(error)
        return
      }
      res.json({ tokenJWT })
    })

  } catch (error) {
    next(error)
  }
}