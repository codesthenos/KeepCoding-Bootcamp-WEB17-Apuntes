import Agent from '../models/Agent'
import { index } from './homeController'

jest.mock('connect-mongo')
let req, res

describe('Testing de homeController', () => {
  beforeEach(() => {
    Agent.list = jest.fn()
    req = {
      session: {},
      query: {}
    }
    res = {
      locals: {},
      __: jest.fn(),
      render: jest.fn()
    }
  })
  it('No se debe llamar a Agent.list si no hay usuario', async () => {
    expect.assertions(1)
    const spy = jest.spyOn(Agent, 'list')
    await index(req, res)
    expect(spy).not.toHaveBeenCalled()    
  })
  it('Al llamar a homeController.index se deben listar los agentes', async () => {
    req.session.userId = '1'

    expect.assertions(1)
    const spy = jest.spyOn(Agent, 'list')
    await index(req, res)
    expect(spy).toHaveBeenCalled()
  })
  it('Al llamar a homeController.index con un filter owner, se deben listar los agentes por owner', async () => {
    req.session.userId = '1'
    const userId = req.session.userId

    expect.assertions(1)
    await index(req, res)

    const spy = jest.spyOn(Agent, 'list')
    expect(spy).toHaveBeenCalledWith({ owner: userId }, undefined, undefined, undefined)
  })
  it('Al llamar a homeController.index se debe llamar a render con el parametro home', async () => {
    expect.assertions(1)
    await index(req, res)

    expect(res.render).toHaveBeenCalledWith('home')
  })
})