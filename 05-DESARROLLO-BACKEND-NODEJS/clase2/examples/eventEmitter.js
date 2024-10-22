'use strict'

const EventEmitter = require('node:events')

const emisor = new EventEmitter()

emisor.once('llamada de telefono', () => { console.log("brr brr") })

emisor.on('llamada de telefono', (quien) => {
  if (quien === 'hermana') return
  console.log(quien, 'ring ring') 
})

emisor.emit('llamada de telefono', 'hermana')
emisor.emit('llamada de telefono', 'hermana')
emisor.emit('llamada de telefono', 'mama')