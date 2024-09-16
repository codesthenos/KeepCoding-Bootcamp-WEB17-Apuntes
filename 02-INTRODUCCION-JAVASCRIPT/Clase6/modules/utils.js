const calculadora = () => {
  let resultado = 0

  const sumar = (input) => {
    resultado = resultado + input
  }

  const restar = (input) => {
    resultado = resultado - input
  }

  const multiplicar = (input) => {
    resultado = resultado * input
  }

  const dividir = (input) => {
    resultado = resultado / input
  }

  const total = () => {
    return resultado
  }

  return { sumar, restar, multiplicar, dividir, total }
}

// forma 1 de exportar/importar (default)
export default calculadora

// forma 2 (sin default)
export const defaultValue = 12

export const message = 'hello world'

export const suma10 = a => a + 10