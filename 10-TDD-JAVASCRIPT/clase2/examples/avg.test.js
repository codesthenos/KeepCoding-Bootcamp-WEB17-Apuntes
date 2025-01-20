const avg = require('./avg')

describe('Funcion avg', () => {
  it('Array de 1 el valor es 1', () => {
    const array = [1, 1, 1, 1, 1]
    expect(avg(array)).toBe(1)
  })
  it('Array vacio el valor es NaN', () => {
    const array = []
    expect(avg(array)).toBeNaN()
  })
  it('Array de numeros positivos el valor es positivo', () => {
    const array = [1, 2, 3, 4, 5]
    expect(avg(array)).toBeGreaterThan(0)
  })
  it('Array de elementos negativos el valor es negativo', () => {
    const array = [-1, -2, -3, -4, -5]
    expect(avg(array)).toBeLessThan(0)
  })
})