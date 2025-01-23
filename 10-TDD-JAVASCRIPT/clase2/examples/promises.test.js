import { successRequest, errorNotFoundRequest } from './promises'

describe("Async / Await style", () => {
  it ('Llamada a successRequest debe devolver un status 200', async () => {
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