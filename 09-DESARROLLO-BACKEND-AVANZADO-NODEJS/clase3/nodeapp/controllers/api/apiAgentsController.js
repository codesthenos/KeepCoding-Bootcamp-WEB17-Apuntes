import Agent from "../../models/Agent.js"

export async function apiAgentList (req, res, next) {
  try {
    const filterAge = req.query.age
    const filterName = req.query.name
    const limit = req.query.limit
    const skip = req.query.skip
    const sort = req.query.sort
    const fields = req.query.fields

    const filter = {}
    if (filterAge) {
      filter.age = filterAge
    }
    if (filterName) {
      filter.name = filterName
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

    const agent = new Agent(agentData)
    // puedo hacer esto gracias al middleware upload.single que uso en app.js
    agent.avatar = req.file?.filename

    const savedAgent = await agent.save()

    res.status(201).json({ result: savedAgent })
  } catch (error) {
    next(error)
  }
}

export async function apiAgentUpdate (req, res, next) {
  try {
    const agentId = req.params.agentId

    const agentData = req.body
    agentData.avatar = req.file?.filename

    const agent = await Agent.findByIdAndUpdate(agentId, agentData, {
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
    await Agent.findByIdAndDelete({ _id: agentId })

    res.json()
  } catch (error) {
    next(error)
  }
}