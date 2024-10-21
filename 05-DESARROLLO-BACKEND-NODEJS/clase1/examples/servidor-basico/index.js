// cargar libreria http
import { createServer } from 'node:http'
import { Chance } from 'chance'

const chance = new Chance()
// definir un servidor
const server = createServer(function(request, response) {
  response.writeHead(200, { 'Content-type': 'text/html' })

  response.end(`<p>Wake up, <strong>${chance.name()}</strong>...</p>`)
})

// Piden permiso de administrador
// PUERTO 80 el puerto habitual para el protocolo http
// PUERTO 443 el puerto por defecto para el protocolo https

// arrancar el servidor
// elijo puerto 1337
// '127.0.0.1' restringe la ip desde la que se pueden realizar las peticiones
// '0.0.0.0' permite que todas las ip hagan requests al server
server.listen(1337, '127.0.0.1')
console.log('Servidor arrancado en http://127.0.0.1:1337')