import { createServer } from 'node:http'

function startServerWithDelay (callback, index = 0, step = 1, limit = 5, PORT = 8000) {
  setTimeout(function() {
    console.clear()
    if (index < limit) {
      index = index + step
      callback(index)
      startServerWithDelay(callback, index)
    } else {
      console.log(`After ${index} seconds\n`)
      console.log('server.listen(PORT)\n')
      server.listen(PORT)
      console.log(`Server running at http://localhost:${PORT}/`)
    }
  }, step * 1000)
}

let counter = 0

setTimeout(function () {
  counter = 1
  setInterval(function () {
    if (counter <= 10) counter++
  }, 1000)
}, 10000)

const server = createServer(function (request, response) {

  response.writeHead(200, { 'Content-Type': 'text/html' })
  
  if (counter <= 10) {
    response.end(`
      <html>
        <head>
          <meta http-equiv="refresh" content="1">
        </head>
        <body>
          <span style="font-size: 5rem">Counter: ${counter}</span>
        </body>
      </html>
    `)
  } else {
    response.end(`<span style="font-size: 5rem">COUNTER ENDED AT NUMBER: ${counter - 1}</span>`)
  }
})

startServerWithDelay(function (number) {
  console.log(number)
})