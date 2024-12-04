// this makes the transpiler understand that this file is a module
export {}

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
  createdAt: Date
  location: string
  topic: string
  add: (item: T) => void
  list: () => void
}

class Library<T> implements ILibrary<T> {
  private items: Array<T> = []
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

const books = await get<IBook[]>('/books')
