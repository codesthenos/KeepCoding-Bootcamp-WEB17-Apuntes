import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
  email: { type: String, unique: true }, // unique, pone un INDICE por defecto, necesario para acelerar las busquedas
  password: String
})

// incluyo un metodo estatico custom al modelo User que hace un hash de una contraseña
userSchema.statics.hashPassword = function (rawPassword) {
  return bcrypt.hash(rawPassword, 7)
}

// metodo de instancia no del schema, comprueba que la pass coincide
// No usar ARROW function, necesitamos el scope de function para el THIS que lo necesitamos
userSchema.methods.comparePasswords = function (rawPassword) {
  return bcrypt.compare(rawPassword, this.password)
}

const User = model('User', userSchema)

export default User