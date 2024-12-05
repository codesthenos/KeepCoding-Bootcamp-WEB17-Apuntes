interface Iperson {
  dni: string
}

interface IStudent extends Iperson {
  name: string
  surname:  string
  age: number
  grade?: string
}

class Student implements IStudent {
  dni: string
  name: string
  surname: string
  age: number
  grade: string

  constructor(
    init: Partial<IStudent> // Cualquier propiedad de IStudent
    // init: required<IStudent> // TODAS las propiedades de IStundent si o si incluso las ?: (propiedades opcionales)
  ) {

  }
}

const Pedro = new Student({ name: 'Pedro' })
const Luis = new Student({ name: 'Luis' })
const Juan = new Student({ name: 'Juan' })

// Ejercicio: definir funcion que nos permita extraer propiedades de un objeto segun su tipo
/**
 * {
 *  nombre: 'Nauel',
 *  apellido: 'Gomez'
 * }
 */
// combinar generico con keyof muy util ver este ejemplo
function getData<T> (item: T, key: keyof T) {
  return item[key]
}

const estudiante1 = {
  dni: '09128t3a',
  name: 'Nauel',
  surname: 'Gomez',
  age: 33
}

const surname = getData<IStudent>(estudiante1, 'surname')