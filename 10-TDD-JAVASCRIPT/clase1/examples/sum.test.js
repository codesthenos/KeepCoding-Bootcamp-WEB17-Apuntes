const suma = require('./sum')

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3)
})

test('sumar 1 + -1 es igual a 0', () => {
  expect(suma(1, -1)).toBe(0)
})