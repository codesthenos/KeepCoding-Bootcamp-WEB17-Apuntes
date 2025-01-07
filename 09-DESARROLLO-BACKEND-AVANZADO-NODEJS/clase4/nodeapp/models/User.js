import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import { createTransport, generatePreviewURL } from '../lib/emailManager.js'

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String
})

// User.find --> estático
// user.save --> instancia

// método estático, que hace un hash de una contraseña
userSchema.statics.hashPassword = function (clearPassword) {
  return bcrypt.hash(clearPassword, 7)
}

// método de instancia, comprueba que la password coincide
// en métodos de instancia NO USAR ARROW FUNCTIONS (se pierde el this)
userSchema.methods.comparePassword = function (clearPassword) {
  return bcrypt.compare(clearPassword, this.password)
}

// metodo de instancia para mandar un email
userSchema.methods.sendEmail = async function (subject, body) {
  const transport = await createTransport()

  console.log(`sending email to ${this.email}...`)

  const result = await transport.sendMail({
    from: process.env.EMAIL_SERVICE_FROM,
    to: this.email,
    subject,
    html: body // se puede usar text para texto plano
  })

  if (process.env.NODEAPP_ENV === 'development') {
    console.log(`Email simulated. Preview ${generatePreviewURL(result)}`)
  }
}

const User = mongoose.model('User', userSchema)

export default User