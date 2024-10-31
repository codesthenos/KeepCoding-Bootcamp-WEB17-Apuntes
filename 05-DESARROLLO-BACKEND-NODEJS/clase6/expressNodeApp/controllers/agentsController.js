import createHttpError from 'http-errors'
import Agent from "../models/Agent.js"

export function index (req, res, next) {
  res.render('new-agent')
}

export async function postNew (req, res, next) {
  try {    
    const { name, age } = req.body
    const userID = req.session.userID
  
    // TODO validaciones
  
    // creo una instancia de agente en memoria
    const agent = new Agent({ name, age, owner: userID })
  
    // la guardo en base de datos
    await agent.save()
    res.redirect('/')
  } catch (error) {
    next(error)
  }
}

export async function deleteAgent (req, res, next) {
  const userId = req.session.userID
  const agentId = req.params.agentId

  // validar que el elemento a borrar es propiedad del ususario logado
  const agent = await Agent.findOne({ _id: agentId })

  // verificar que existe
  if (!agent) {
    console.warn(`WARNING - el usuario ${userId} esta intentando eliminar un agente inexistente`)
    next(createHttpError(404))
  }
  if (agent.owner.toString() !== userId) {
    console.warn(`WARNING - el usuario ${userId} esta intentando eliminar un agente de otro usuario`)
    next(createHttpError(401))
  }

  await Agent.deleteOne({ _id: agentId })

  res.redirect('/')
}