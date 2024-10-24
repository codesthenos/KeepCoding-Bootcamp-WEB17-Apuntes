// Esto no forma parte de la clase
export function index (req, res, next) {
  res.locals.appName = 'USERS'
  res.render('home')
}