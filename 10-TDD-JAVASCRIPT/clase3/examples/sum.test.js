import { suma } from './sum.js'

describe.skip('Funcion suma', () => {
  test.skip('sumar 0 + 0 es igual a 0', () => {
    expect(suma(0, 0)).toEqual(0)
  })

  test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBeGreaterThan(2)
    expect(suma(1, 2)).toBe(3)
  })

  it('Sumar 0.1 + 0.2 sea igual a 0.3', () => {
    expect(suma(0.1, 0.2)).toBeCloseTo(0.3, 1)
  })

  it('Sumar 0.1 + 0.2 sea igual a 0.3', () => {
    expect(suma(0.1, 0.2)).toBeCloseTo(0.3, 15)
  })

  it('Sumar 0.1 + 0.2 sea igual a 0.3', () => {
    expect(suma(0.1, 0.2)).toBeCloseTo(0.3, 16)
  })
})

describe.skip('Funcion sum con numeros negativos', () => {
  it('sumar 1 + -1 es igual a 0', () => {
    expect(suma(1, -1)).not.toBeGreaterThan(0)
  })
})

describe.skip('Funcion sum con numeros decimales', () => {
  it('Sumar 1.100000 + 2.230404 sea igual a 3.330404', () => {
    expect(suma(1.100000, 2.230404)).toBeCloseTo(3.330404, 6)
  })
})

describe.skip('Testear con valores no numericos', () => {
  it('Sumar 1 + a debe devolver un error', () => {
    expect(() => suma(1, 'a')).toThrow() // => toThrow() lanza error
  })

  it('Sumar a + 1 debe devolver un error', () => {
    expect(() => suma('a', 1)).toThrow()
  })

  it('Sumar a + a debe devolver un error', () => {
    expect(() => suma('a', 'a')).toThrow()
  })

  it('Sumar algo que no sea un numero debe devolver un error', () => {
    expect(() => suma('c', 'b')).toThrow()
    expect(() => suma(null, 'b')).toThrow()
    expect(() => suma('c', undefined)).toThrow()
  })
})