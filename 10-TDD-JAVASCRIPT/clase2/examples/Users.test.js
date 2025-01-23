import { Users } from './Users'

describe('Users class test', () => {
  describe('usando api real', () => {
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
  describe.skip('usando mock', () => {
    // TODO revisar como mockear clases
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
})