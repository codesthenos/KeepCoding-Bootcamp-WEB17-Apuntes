
export function index (req, res, next) {
  const now = new Date

  res.locals.name = '<script>alert("inyeccion de codigo")</script>'
  res.locals.isEven = (now.getSeconds() % 2) === 0
  res.locals.currentSecond = now.getSeconds()
  res.locals.users = [
    { name: 'Smith', age: 30 },
    { name: 'Brown', age: 42 }
  ]

  res.render('home')
}