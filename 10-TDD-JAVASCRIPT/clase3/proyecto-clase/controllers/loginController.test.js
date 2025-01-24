import { index } from './loginController'

jest.mock('connect-mongo')
let req, res

describe('Testing de loginController', () => {

  beforeEach(() => {
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

  describe('Testing index fn', () => {
    it('Al llamar a loginController.index se debe llamar a la funcion res.render con el parametro "login" una sola vez', () =>{
      expect.assertions(1)
      index(req, res)
  
      expect(res.render).toHaveBeenCalledWith('login')
    })
  })
})