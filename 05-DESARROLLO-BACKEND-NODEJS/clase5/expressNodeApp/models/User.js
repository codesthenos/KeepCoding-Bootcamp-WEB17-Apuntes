import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String
})

// incluyo un metodo estatico custom al modelo User que hace un hash de una contraseña
userSchema.statics.hashPassword = function (rawPassword) {
  return bcrypt.hash(rawPassword, 7)
}

const User = model('User', userSchema)

export default User