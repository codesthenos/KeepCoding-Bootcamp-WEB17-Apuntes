import User from '../models/User'
import { index, postLogin } from './loginController'

jest.mock('connect-mongo')
let req, res, mockUser

describe('Testing de loginController', () => {

  beforeEach(() => {
    mockUser = new User({
      email: 'test@keepcoding.io',
      password: 'abcd123',
      sendEmail: jest.fn()
    })
    User.findOne = jest.fn()
    // User.findOne.mockResolvedValue(mockUser)
    req = {
      session: {},
      query: {},
      body: {}
    }
    res = {
      locals: {},
      __: jest.fn(),
      render: jest.fn(),
      redirect: jest.fn()
    }
  })

  describe('Testing index fn', () => {
    it('Al llamar a loginController.index se debe llamar a la funcion res.render con el parametro "login" una sola vez', () =>{
      expect.assertions(3)
      index(req, res)
      
      expect(res.render).toHaveBeenCalled()
      expect(res.render).toHaveBeenCalledOnce()
      expect(res.render).toHaveBeenCalledWith('login')
    })
  })

  describe.only('Testing postLogin', () => {
    it('Al llamar a postLogin se debe llamar a User.findOne pasandole como parametro el req.body.email', () => {
      expect.assertions(2)
      req.body.email = 'test@keepcoding.io'
      postLogin(req, res)

      expect(User.findOne).toHaveBeenCalled()
      expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email })

    })
    it('Si no encuentra al usuario se debe renderizar el login', async () => {
      expect.assertions(2)
      req.body.email = 'test@keepcoding.io'
      await postLogin(req, res)

      expect(res.render).toHaveBeenCalled()
      expect(res.render).toHaveBeenCalledWith('login')
    })
    it('Si la contraseña es incorrecta se debe renderizar el login', async () => {
      expect.assertions(2)
      req.body.email = 'test@keepcoding.io'
      req.body.password = 'abcd123456'

      await postLogin(req, res)

      expect(res.render).toHaveBeenCalled()
      expect(res.render).toHaveBeenCalledWith('login')
    })
    it('Si el usuario y la contraseña son correctos se debe llamar a sendMail', async () => {
      expect.assertions(1)
      User.findOne.mockResolvedValue(mockUser)
      req.body.email = 'test@keepcoding.io'
      req.body.password = 'abcd123456'
      await postLogin(req, res)
      expect(mockUser.sendEmail).toHaveBeenCalled()
    })
    it('Si el usuario y la contraseña son correctos se debe hacer un redirect a /', async () => {

    })
  })
})