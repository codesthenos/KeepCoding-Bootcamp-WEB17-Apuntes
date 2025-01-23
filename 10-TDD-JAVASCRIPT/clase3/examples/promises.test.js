import { successRequest, errorNotFoundRequest } from './promises'

describe("Async / Await style", () => {
  it('Llamada a successRequest debe devolver un status 200', async () => {
    expect.assertions(1)
    // sin try catch para que funcione
    const response = await successRequest()

    expect(response.status).toBe(200)
  })
  it('Llamada a errorNotFoundRequest debe devolver un status 404', async () => {
    expect.assertions(1)
    try {      
      await errorNotFoundRequest()
    } catch (error) {
      expect(error.response.status).toBe(404)
    }
  })
})
describe('Callback style', () => {
  it('Llamada a successRequest debe devolver un status 200', (done) => {
    expect.assertions(2)
    // para usar then
    successRequest().then(res => {
      expect(res.status).toBe(200)
      expect(res.statusText).toMatch(/OK/)
      // uso done()
      done()
    })
  })
  it('Llamada a errorNotFoundRequest debe devolver un status 404', (done) => {
    expect.assertions(3)
    errorNotFoundRequest().catch(error => {
      expect(error.response.status).toBe(404)
      expect(error.response.statusText).toMatch(/OT FOU/)
      expect(error.message).toMatch(/404/)
      done()
    })
  })
})
describe('Resolve Reject style', () => {
  it('Llamada a successRequest debe devolver un status 200', () => {
    expect.assertions(2)
    return successRequest().then(res => {
      expect(res.status).toBe(200)
      expect(res.statusText).toMatch(/OK/)
    })
  }, 10000) // podemos definir cuanto esperamos a que termine la llamada (5000 por defect0)
  it('Llamada a errorNotFoundRequest debe devolver un status 404', () => {
    expect.assertions(3)
    return errorNotFoundRequest().catch(error => {
      expect(error.response.status).toBe(404)
      expect(error.response.statusText).toMatch(/OT FOU/)
      expect(error.message).toMatch(/404/)
    })
  })
})