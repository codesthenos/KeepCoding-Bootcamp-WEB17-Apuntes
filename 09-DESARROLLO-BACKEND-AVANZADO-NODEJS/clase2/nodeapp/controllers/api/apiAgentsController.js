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

    const agents = await Agent.list(filter, limit, skip, sort, fields)
    const totalAgents = await Agent.countDocuments(filter)

    res.json({ agents, count: totalAgents })
  } catch (error) {
    next(error)
  }
}