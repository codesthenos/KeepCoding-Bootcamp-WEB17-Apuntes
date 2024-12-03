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
interface ILibrary {
  items: Array<T>
  createdAt: Date
  location: string
  topic: string
}

class Library<T> {
  private items: Array<T> = []
  public createdAt: Date
  constructor () {
    this.createdAt = new Date()
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

const bookLibrary = new Library<IBook>()
const magazineLibrary = new Library<IMagazine>()

bookLibrary.add(book1)

// --- clonando axios

async function get<T> (path: string) {
  return fetch(path)
    .then(res => res.json()
      .then(json => json as T))
}

const books = await get<IBook[]>('/books')