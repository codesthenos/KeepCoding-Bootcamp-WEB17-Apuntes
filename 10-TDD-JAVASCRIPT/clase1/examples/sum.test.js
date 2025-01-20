const suma = require('./sum')

describe('Funcion suma', () => {
  test.skip('sumar 0 + 0 es igual a 0', () => {
    expect(suma(0, 0)).toEqual(0)
  })

  test.only('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBeGreaterThan(2)
    expect(suma(1, 2)).toBe(3)
  })

  it.only('Sumar 0.1 + 0.2 sea igual a 0.3', () => {
    expect(suma(0.1, 0.2)).toBeCloseTo(0.3, 1)
  })

  it('Sumar 0.1 + 0.2 sea igual a 0.3', () => {
    expect(suma(0.1, 0.2)).toBeCloseTo(0.3, 15)
  })

  it('Sumar 0.1 + 0.2 sea igual a 0.3', () => {
    expect(suma(0.1, 0.2)).toBeCloseTo(0.3, 16)
  })
})

describe.only('Funcion sum con numeros negativos', () => {
  it('sumar 1 + -1 es igual a 0', () => {
    expect(suma(1, -1)).not.toBeGreaterThan(0)
  })
})

describe.only('Funcion sum con numeros decimales', () => {
  it('Sumar 1.100000 + 2.230404 sea igual a 3.330404', () => {
    expect(suma(1.100000, 2.230404)).toBeCloseTo(3.330404, 6)
  })
})