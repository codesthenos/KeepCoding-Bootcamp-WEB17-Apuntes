import User from '../models/User.js'

export function index (req, res, next) {
  res.locals.error = ''
  res.locals.email = ''
  res.render('login')
}

export async function postLogin (req, res, next) {
  const { email, password } = req.body

  try {
    // Buscar el usuario en la base de datos
    const user = await User.findOne({ email: email.toLowerCase() })
    // comparo las passwords
    const isValidPassword = await user.comparePasswords(password)
    // Validacion (email o password no coinciden)
    if (!user || !isValidPassword) {
      res.locals.error = 'Invalid credenteials'
      res.locals.email = email
      res.render('login')
      return
    }
    // Si email y pass coinciden apunto en su sesion que esta logueado
    req.session.userID = user._id
    req.session.userEmail = user.email
    // Si coincide redireccionamos
    res.redirect('/')
  } catch (err) {
    next(err)
  }
}