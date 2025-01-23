export function changeLocale(req, res, next) {
  // const locale = req.params.locale
  const locale = req.query.locale

  // poner una cookie en la respuesta
  res.cookie('nodeapp-locale', locale, {
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
  })

  // redirigir a la misma página en la que estaba
  res.redirect('back')
}