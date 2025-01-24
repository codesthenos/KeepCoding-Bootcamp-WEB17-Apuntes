import axios from 'axios'
import { Users } from './Users'

jest.mock('axios')

describe('Users class test', () => {
  describe.skip('usando api real', () => {
    // Hooks
    // Lifecycle methods Aplica por bloque de describe
    // beforeEach(() => {}) Ejecuta lo de dentro antes de cada test
    // beforeAll(() => {}) Ejecuta lo de dentro antes primer test
    // afterEach(() => {}) Ejecuta lo de dentro después de cada uno
    // afterAll(() => {}) Ejecuta lo de dentro después del ultimo test
    let users
    beforeAll( async () => {
      users = await Users.all() 
    })
    afterAll(() => {
      users = undefined
    })
    it('Debe devolver un array de 10 usuarios si llamamos a all', async () => {
      expect.assertions(2)
  
      expect(users).toBeArray()
      expect(users).toBeArrayOfSize(10)
    })
    it('El tercer usuario debe contener en la propiedad name la cadena Bauch', async () => {
      expect.assertions(4)
  
      expect(users[2]).toBeObject()
      expect(users[2]).toContainKey('name')
      expect(users[2].name).toMatch(/Bauch/)
      expect(users[2]).toContainEntry(['name','Clementine Bauch'])
    })
  })
  describe('usando mock', () => {
    let users
    beforeAll( async () => {
      const mockUsers = Array.from({ length: 10 }, () => (
        { name: 'Clementine Bauch', age: 20 }
      ))
      mockUsers[5] = { name: 'Ervin Howell' }
      axios.get.mockResolvedValue({ data: mockUsers })
      users = await Users.all()
  })
    afterAll(() => {
      users = undefined
    })
    it('Debe devolver un array de 10 usuarios si llamamos a all', async () => {
      expect.assertions(2)
  
      expect(users).toBeArray()
      expect(users).toBeArrayOfSize(10)
    })
    it('El tercer usuario debe contener en la propiedad name la cadena Bauch', async () => {
      expect.assertions(4)
  
      expect(users[2]).toBeObject()
      expect(users[2]).toContainKey('name')
      expect(users[2].name).toMatch(/Bauch/)
      expect(users[2]).toContainEntry(['name','Clementine Bauch'])
    })
    it('Debe devolver un elemento 6 con el nombre Ervin Howell', async () => {
      expect(users[5]).toContainEntry(['name','Ervin Howell'])
    })
  })
})