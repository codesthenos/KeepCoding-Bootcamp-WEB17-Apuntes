/**
 * 
 * Exercise 1
 * Define una interfaz `Product` con las siguientes propiedades:
 * - `name` de tipo `string`
 * - `price` de tipo `number`
 * - `description` de tipo `string`
 * - `category` de tipo `string`
 * 
 * Define un array con 3 productos distintos.
 * 
 */

interface Product {
    name: string;
    price: number;
    description: string;
    category: string;
}

const products: Product[] = [
    {
        name: "Laptop",
        price: 1000,
        description: "A laptop",
        category: "Electronics"
    },
    {
        name: "Shirt",
        price: 20,
        description: "A shirt",
        category: "Clothing"
    },
    {
        name: "Book",
        price: 10,
        description: "A book",
        category: "Books"
    }
];

console.table(products);

/**
 * TODO:
 * Exercise 2
 * Define una interfaz addicional `Service` con las propiedades
 * customerName: string   OK
 * price: number   OK
 * periodicity: string   OK 
 * 
 * Define una función `findCheap` que reciba un array de tipo genérico y devuelva el elemento más barato.
 * Implementa esa función para buscar el elemento más barato de una lista de Products y el más barato de una lista de Services.
 */
interface MinimalProduct {
    price: number;
}


interface Service extends MinimalProduct {
    customerName: string;
    // price: number;
    periodicity: string;
}

// { ...obj1, ...obj2 }

function findCheap<T extends { price: number }>(elements: T[]): T {
    return elements.reduce((prev, current) => prev.price < current.price ? prev : current);
}



// API
const exampleResponseUsers = {
    ts: 123456,
    statusCode: 200,
    data: [
        // Array de usuarios
    ]
}

const exampleResponseProducts = {
    ts: 123456,
    statusCode: 200,
    data: [
        // Array de productos
    ]
}

// v1: genericos:
interface ApiResponse<T> {
    ts: number;
    statusCode: number;
    data: T
}

interface User {
    id: number;
    name: number;
}

const userResponse: ApiResponse<User[]> = {
    ts: 123456,
    statusCode: 200,
    data: [
        // Array de productos
    ]
}

const statusResponse: ApiResponse<string> = {
    ts: 123456,
    statusCode: 200,
    data: 'ok',
}

// v2: extension:
interface ApiResponse2 {
    ts: number;
    statusCode: number;
}

interface UserResponse2 extends ApiResponse2 {
    data: User[]
}

interface StatusResponse2 extends ApiResponse2 {
    data: string;
}