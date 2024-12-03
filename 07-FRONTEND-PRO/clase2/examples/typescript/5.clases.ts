interface IStudent {
  name: string
  surnames: string
  age: number
  grade: string
}

interface IPerson {
  dni: string
  setDni: (dni: string) => void
  getDni: () => string
}

class Student implements IStudent, IPerson {
  name: string
  surnames: string
  age: number
  grade: string
  dni: string
  constructor(
    name: string,
    surnames: string,
    age: number,
    grade: string
  ) {
    this.name = name
    this.surnames = surnames
    this.age = age
    this.grade = grade
  }

  setDni(dni: string) {
    this.dni = dni
  }

  getDni () {
    return this.dni
  }

  get fullname (): string {
    return `${this.name} ${this.surnames}`
  }
  // setter NUNCA DEVUELVE NADA
  set fullname (fullname: string) {
    this.name = fullname.split(' ')[0]
    this.surnames = fullname.split(' ')[1]
  }
}

const aida = new Student(
  'Aida',
  'Apellido',
  29,
  'KCWB'
)
console.log(aida.fullname)
aida.fullname = 'Aida'
console.log(aida.surnames)

class Product {
  private _price: number
  constructor(
    price: number
  ) {
    this._price = price * 100
  }

  get price (): number {
    return this._price / 100
  }

  set price (price: number) {
    this._price = price * 100
  }
}
/* para que no apse esto usamos estos getter y setter con * 100 y / 100
const product1 = new Product(1.50)
product1.price += 1.50
// Puede dar 3,000001 en vez de 3
console.log(product1.price)
*/