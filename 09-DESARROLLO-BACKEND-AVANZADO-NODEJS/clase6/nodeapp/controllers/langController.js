export function changeLocale (req, res, next) {
  const locale = req.params.locale

  // poner una cookie en la respuesta con el idioma
  res.cookie('nodeapp-locale', locale, {
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 dias
  })
  // redirigir al usuario a la pagina que estaba
  res.redirect('back')
}