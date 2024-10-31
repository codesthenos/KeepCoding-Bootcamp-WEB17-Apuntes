import { Schema, model } from 'mongoose'

// definir el esquema de los agentes
const agentSchema = new Schema({
  name: { type: String, unique: true },
  age: { type: Number, min: 18, max: 150 },
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

// creamos el modelo de Agente
const Agent = model('Agent', agentSchema)

export default Agent