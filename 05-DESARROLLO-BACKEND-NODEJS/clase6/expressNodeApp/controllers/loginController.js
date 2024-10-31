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
    // Validacion (email o password no coinciden)
    // comparo las passwords
    const isValidPassword = await user.comparePasswords(password)
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

export function logout (req, res, next) {
  // regenerate viene de session que lo importamos de express-session y borra la sesion actual
  req.session.regenerate(error => {
    if (error) return next(error)
    res.redirect('/')
  })
}