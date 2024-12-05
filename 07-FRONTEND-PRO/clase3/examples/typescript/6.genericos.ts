// this makes the transpiler understand that this file is a module
// export {}

interface IBook {
  title: string
  author: string
  year: number
  isbn: string
}

interface IMagazine {
  name: string
  topic: string
  date: Date
  barcode: number
}
// TODO para el jueves:
// Ejercicio 1: Seriamos capaces de TIPAR la clase Library?
// 1. Añadir la propiedad location (p.e. Sala 1)
// 2. Añadir propiedad topic.
// 3. Mantener el uso de genericos.
interface ILibrary<T> {
  items: T[]
  createdAt: Date
  location: string
  topic: string
  add: (item: T) => void
  list: () => void
  get?: () => T[]
}

class Library<T> implements ILibrary<T> {
  readonly items: Array<T> = []
  public createdAt: Date
  public location: string
  public topic: string
  constructor (location: string, topic: string) {
    this.createdAt = new Date()
    this.location = location
    this.topic = topic
  }
  public add (item: T): void {
    this.items.push(item)
  }

  public list (): void {
    console.table(this.items)
  }
}

const bookLibrary1: ILibrary<IBook> = {
  items: [],
  createdAt: new Date(),
  location: 'spain',
  topic: 'sports',
  add: (item: IBook) => this.items.push(item),
  list: () => {}
}

const magazineLibrary1: ILibrary<IMagazine> = {
  items: [],
  createdAt: new Date(),
  location: 'england',
  topic: 'motor',
  add: (item: IMagazine) => this.items.push(item),
  list: () => {}
}

const book1: IBook = {
  title: 'Libro 1',
  author: 'Author 1',
  year: 2021,
  isbn: 'isbn1'
}

const book2: IBook = {
  title: 'Libro 2',
  author: 'Author 2',
  year: 2022,
  isbn: 'isbn2'
}

const book3: IBook = {
  title: 'Libro 3',
  author: 'Author 3',
  year: 2023,
  isbn: 'isbn3'
}

const magazine1 = {
  name: 'magazine1',
  topic: 'topic1',
  date: new Date(),
  barcode: 'barcode1'
}

const magazine2 = {
  name: 'magazine2',
  topic: 'topic2',
  date: new Date(),
  barcode: 'barcode2'
}

const bookLibrary = new Library<IBook>('spain', 'history')
const magazineLibrary = new Library<IMagazine>('eeuu', 'stories')

bookLibrary.add(book1)

// --- clonando axios

async function get<T> (path: string) {
  return fetch(path)
    .then(res => res.json()
      .then(json => json as T))
}

//const books = await get<IBook[]>('/books')
// ejercicio
interface Product {
  name: string
  price: number
  description: string
  category: string
}

const products: Product[] = [
  {
    name: 'shirt',
    price: 22,
    description: 'shirt 22 dollar',
    category: 'clothes'
  },
  {
    name: 'moto',
    price: 22000,
    description: 'moto 22000 dollar',
    category: 'motor'
  },
  {
    name: 'football',
    price: 26,
    description: 'football 26 dollar',
    category: 'sports'
  }
]
console.table(products)

interface Service {
  customerName: string
  price: number
  periodicity: string
}

const services: Service[] = [
  {
    customerName: 'Juan',
    price: 22,
    periodicity: 'periodicity 1'
  },
  {
    customerName: 'Pepe',
    price: 22000,
    periodicity: 'periodicity 2'
  },
  {
    customerName: 'Antonio',
    price: 2,
    periodicity: 'periodicity 3'
  }
]
console.table(services)

function findCheap<T extends { price: number }> (array: T[]): T {
  let cheapest = array[0]
  array.forEach(element => {
    if (element.price < cheapest.price) {
      cheapest = element
    }
  })
  return cheapest
}

const cheapestProduct = findCheap(products)
const cheapestService = findCheap(services)
console.log('cheapest PRODUCT: ', cheapestProduct,' | cheapest SERVICE: ', cheapestService)
/**
 * TODO:
 * Exercise 2
 * Define una interfaz addicional `Service` con las propiedades
 * customerName: string
 * price: number
 * periodicity: string
 * 
 * Define una función `findCheap` que reciba un array de tipo genérico y devuelva el elemento más barato.
 * Implementa esa función para buscar el elemento más barato de una lista de Products y el más barato de una lista de Services.
 */

// API

interface ApiResponse<T> {
  ts: number
  statusCode: number
  data: T
}

interface User {
  id: number
  name: string
}

const userResponse: ApiResponse<User[]> = {
  ts: 123456,
  statusCode: 200,
  data: [
    // Array de usuarios...
  ]
}

const exampleResponse1: ApiResponse<User[]> = {
  ts: 123456,
  statusCode: 200,
  data: [
    // Array de productos...
  ]
}

const exampleResponse2: ApiResponse<string> = {
  ts: 123456,
  statusCode: 200,
  data: 'string'
}

// extends:
interface ApiResponse2 {
  ts: number
  statusCode: number
}

interface UserResponse2 extends ApiResponse2 {
  data: User[]
}

interface StringResponse2 extends ApiResponse2 {
  data: string
}