// Contexto: Libreria / Quiosco

interface IBook {
    title: string;
    author: string;
    year: number;
    isbn: string;
}

interface IMagazine {
    name: string;
    topic: string;
    date: Date;
    barcode: number;
}

class Library<T> {
    private items: Array<T> = [];
    public createtAt: Date;
    constructor() {
        this.createtAt = new Date();
    }
    public add(item: T): void {
        this.items.push(item);
    }

    public list(): void {
        console.table(this.items)
    }
}

const book1: IBook = {
    title: 'Libro 1',
    author: 'Autor 1',
    isbn: '2123',
    year: 2023, 
}
const book2: IBook = {
    title: 'Libro 2',
    author: 'Autor 2',
    isbn: '2123',
    year: 2021, 
}

const magazine1: IMagazine = {
    barcode: 1234,
    date: new Date(),
    name: 'Magazine 1',
    topic: 'Topic 1'
}
const magazine2: IMagazine = {
    barcode: 12123434,
    date: new Date(),
    name: 'Magazine 2',
    topic: 'Topic 2'
}

const bookLibrary = new Library<IBook>();
const magazineLibrary = new Library<IMagazine>();

bookLibrary.add(book1);
console.log(bookLibrary.list())



// --- clonando axios

// function get<T>(path: string) {
//     return fetch(path)
//         .then(res => res.json())
//         .then(json => json as T)
// };

// const books = await get<IBook[]>('/books')


// TODO para el jueves:
// Ejercicio 1: Seriamos capaces de TIPAR la clase Library? OK
// 1. Añadir la propiedad location (p.e. Sala 1) OK
// 2. Añadir propiedad topic. OK
// 3. Mantener el uso de genericos. OK

interface ILibrary<T> {
    readonly items: T[];
    createdAt: Date;
    // location: string;
    // topic: string;
    add: (item: T) => void;  // Suma:   const suma = (n1, n2) => n1 + n2;
    list: () => void;
    get?: () => T[];
}

interface IBookLibrary {
    readonly items: IBook[];
    createdAt: Date;
    // location: string;
    // topic: string;
    add: (item: IBook) => void;  // Suma:   const suma = (n1, n2) => n1 + n2;
    list: () => void;
    get?: () => IBook[];
}




const libraryObject: ILibrary<IBook> = {
    items: [],
    createdAt: new Date(),
    add: (item: IBook) => console.log(item),
    list: () => this.items,
};

const libraryObject2: ILibrary<IMagazine> = {
    items: [],
    createdAt: new Date(),
    add: (item: IMagazine) => console.log(item),
    list: () => this.items,
};




class NewLibrary<T> implements ILibrary<T> {
    readonly items: Array<T> = [];
    public createdAt: Date;
    constructor() {
        this.createdAt = new Date();
    }
    public add(item: T): void {
        this.items.push(item); // -------> x001fa
    }

    // private reset() {
    //     this.items = []; // -------> x001fb (Con el = asignamos valores, readonly no permite REASIGNAR)
    // }

    public list(): void {
        console.table(this.items)
    }
}
const library2 = new NewLibrary<IBook>();
// library2.items = []; // Si intentamos reasignar nos da error.


