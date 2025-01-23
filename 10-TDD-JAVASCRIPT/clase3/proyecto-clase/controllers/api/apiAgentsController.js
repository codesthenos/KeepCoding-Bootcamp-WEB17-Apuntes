import createError from 'http-errors'
import Agent from '../../models/Agent.js'

/**
 * @openapi
 * /api/agents:
 *  get:
 *    security:
 *      - BearerAuth: []
 *    description: |
 *      Return list of agents
 *      <br />
 *      <b>Examples:</b>
 *      pagination:      http://localhost:3000/api/agents?skip=2&limit=2
 *      sorting:         http://localhost:3000/api/agents?sort=-age%20name
 *      field selection: http://localhost:3000/api/agents?fields=age%20-_id
 *    parameters:
 *      - in: query
 *        name: skip
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Returns JSON
 */
export async function apiAgentList(req, res, next) {
  try {
    const userId = req.apiUserId
    // http://localhost:3000/api/agents/?name=Jones&Age=23
    const filterAge = req.query.age
    const filterName = req.query.name
    // http://localhost:3000/api/agents/?limit=2&skip=2
    const limit = req.query.limit
    const skip = req.query.skip
    // http://localhost:3000/api/agents/?sort=age
    const sort = req.query.sort
    // http://localhost:3000/api/agents/?fields=name -_id
    const fields = req.query.fields

    const filter = { owner: userId }

    if (filterAge) {
      filter.age = filterAge
    }

    if (filterName) {
      filter.name = filterName
    }

    const [agents, agentCount] = await Promise.all([
      Agent.list(filter, limit, skip, sort, fields),
      Agent.countDocuments(filter)
    ])

    res.json({
      results: agents,
      count: agentCount
    })

  } catch (error) {
    next(error)
  }
}

export async function apiAgentGetOne(req, res, next) {
  try {
    const userId = req.apiUserId
    const agentId = req.params.agentId

    const agent = await Agent.findOne({ _id: agentId, owner: userId })

    res.json({ result: agent })
  } catch (error) {
    next(error)
  }
}

export async function apiAgentNew(req, res, next) {
  try {
    const userId = req.apiUserId
    const agentData = req.body

    // create agent instance in memory
    const agent = new Agent(agentData)
    agent.owner = userId
    agent.avatar = req.file?.filename

    // save agent
    const savedAgent = await agent.save()

    res.status(201).json({ result: savedAgent })
  } catch (error) {
    next(error)
  }
}

export async function apiAgentUpdate(req, res, next) {
  try {
    const userId = req.apiUserId
    const agentId = req.params.agentId
    const agentData = req.body
    agentData.avatar = req.file?.filename

    const updatedAgent = await Agent.findOneAndUpdate({ _id: agentId, owner: userId }, agentData, {
      new: true // para obtener el documento actualizado
    })

    res.json({ result: updatedAgent })
  } catch (error) {
    next(error)
  }
}

export async function apiAgentDelete(req, res, next) {
  try {
    const userId = req.apiUserId
    const agentId = req.params.agentId

    // validar que el documento que queremos borrar pertenece al usuario
    const agent = await Agent.findOne({ _id: agentId })

    // verificar si existe
    if (!agent) {
      console.warn(`WARNING - el usuario ${userId} está intentando eliminar un agente inexistente`)
      return next(createError(404))
    }

    // comprobamos la propiedad antes de eliminar
    // agent.owner es un ObjectId, y para compararlo con un string necesitamos convertirlo
    // a texto.
    if (agent.owner.toString() !== userId) {
      console.warn(`WARNING - el usuario ${userId} está intentando eliminar un agente que es propiedad de otro usuario`)
      return next(createError(401))
    }

    await Agent.deleteOne({ _id: agentId })

    res.json()
  } catch (error) {
    next(error)
  }
}