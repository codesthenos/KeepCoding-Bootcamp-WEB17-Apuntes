
export function index (req, res, next) {
  res.render('home', {
    appName: 'NodeApp'
  })
}