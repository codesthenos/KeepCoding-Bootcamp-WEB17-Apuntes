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

const server = createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  
  response.end('Hello world')
})

startServerWithDelay(function (number) {
  console.log(number)
})