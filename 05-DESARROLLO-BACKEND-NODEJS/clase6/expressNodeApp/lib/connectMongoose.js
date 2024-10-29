import mongoose from 'mongoose'

mongoose.connection.on('error', err => {
  console.log('Error de conexion a la base de datos:', err)
})

export function connectMongoose () {
  return mongoose.connect('mongodb://127.0.0.1:27017/cursonode')
    .then(mongoose => mongoose.connection)
}