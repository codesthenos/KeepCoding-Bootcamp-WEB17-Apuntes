import createError from 'http-errors'
import Agent from "../../models/Agent.js"

/**
 * @openapi
 * /api/agents:
 *  get:
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

export async function apiAgentList (req, res, next) {
  try {
    const filterAge = req.query.age
    const filterName = req.query.name
    const limit = req.query.limit
    const skip = req.query.skip
    const sort = req.query.sort
    const fields = req.query.fields

    const userId = req.apiUserId

    const filter = {}
    if (filterAge) {
      filter.age = filterAge
    }
    if (filterName) {
      filter.name = filterName
    }
    if (userId) {
      filter.owner = userId
    }

    const [agents, totalAgents] = await Promise.all([
      Agent.list(filter, limit, skip, sort, fields),
      Agent.countDocuments(filter)
    ])

    res.json({ agents, count: totalAgents })
  } catch (error) {
    next(error)
  }
}

export async function apiAgentGetOne (req, res, next) {
  try {
    const agentId = req.params.agentId

    const agent = await Agent.findById(agentId)

    res.json(agent)
  } catch (error) {
    next(error)
  }
}

export async function apiAgentNew (req, res, next) {
  try {
    const agentData = req.body
    const userId = req.apiUserId

    const agent = new Agent(agentData)
    // puedo hacer esto gracias al middleware upload.single que uso en app.js
    agent.avatar = req.file?.filename
    agent.owner = userId

    const savedAgent = await agent.save()

    res.status(201).json({ result: savedAgent })
  } catch (error) {
    next(error)
  }
}

export async function apiAgentUpdate (req, res, next) {
  try {
    const agentId = req.params.agentId
    const userId = req.apiUserId

    const agentData = req.body
    agentData.avatar = req.file?.filename

    const agent = await Agent.findOneAndUpdate({ _id: agentId, owner: userId }, agentData, {
      new: true
    })

    res.json(agent)
  } catch (error) {
    next(error)
  }
}

export async function apiAgentDelete (req, res, next) {
  try {
    const agentId = req.params.agentId
    const userId = req.apiUserId

    const agent = await Agent.findById(agentId)

    if (!agent) {
      console.warn(`WARNING - el usuario ${userId} está intentando eliminar un agente inexistente`)
      return next(createError(404, 'Agent not found'))
    }

    if (agent.owner.toString() !== userId) {
      console.warn(`WARNING - el usuario ${userId} está intentando eliminar un agente de otro usuario`)
      return next(createError(401, 'User logged not owner'))
    }

    await Agent.findByIdAndDelete({ _id: agentId })

    res.json({ result: 'agent deleted'})
  } catch (error) {
    next(error)
  }
}