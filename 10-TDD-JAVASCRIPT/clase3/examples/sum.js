export function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('a o b no es un numero')
  }

  return a + b
}