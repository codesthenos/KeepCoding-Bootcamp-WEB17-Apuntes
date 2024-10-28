import assert from 'node:assert'

// GET '/'
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

// GET '/param_in_route/44' (ej)
export function paramInRouteExample (req, res, next) {
  const num = req.params.num

  res.send('Param getted ' + num)
}

// GET '/multiple_params_in_route/camiseta/size/37/color/red' (ej)
export function multipleParamInRouteExample (req, res, next) {
  const product = req.params.product
  const size = req.params.size
  const color = req.params.color

  res.send(`Product: ${product} Size: ${size} Color: ${color}`)
}

// GET '/queryString' params (ej) '/param_in_query?size=S&color=blue'
export function queryStringParamsExample (req, res, next) {
  const size = req.query.size
  const color = req.query.color

  res.send(`Size: ${size} Color: ${color}`)
}

// POST /create-example
export function createExample (req, res, next) {
  const item = req.body.item

  assert(item, 'item is required')

  res.send('Created item: '+ item)
}