System.register("6.genericos", [], function (exports_1, context_1) {
    "use strict";
    var Library, book1, book2, book3, magazine1, magazine2, bookLibrary, magazineLibrary, books, products;
    var __moduleName = context_1 && context_1.id;
    // --- clonando axios
    async function get(path) {
        return fetch(path)
            .then(res => res.json()
            .then(json => json));
    }
    return {
        setters: [],
        execute: async function () {
            Library = class Library {
                items = [];
                createdAt;
                location;
                topic;
                constructor(location, topic) {
                    this.createdAt = new Date();
                    this.location = location;
                    this.topic = topic;
                }
                add(item) {
                    this.items.push(item);
                }
                list() {
                    console.table(this.items);
                }
            };
            book1 = {
                title: 'Libro 1',
                author: 'Author 1',
                year: 2021,
                isbn: 'isbn1'
            };
            book2 = {
                title: 'Libro 2',
                author: 'Author 2',
                year: 2022,
                isbn: 'isbn2'
            };
            book3 = {
                title: 'Libro 3',
                author: 'Author 3',
                year: 2023,
                isbn: 'isbn3'
            };
            magazine1 = {
                name: 'magazine1',
                topic: 'topic1',
                date: new Date(),
                barcode: 'barcode1'
            };
            magazine2 = {
                name: 'magazine2',
                topic: 'topic2',
                date: new Date(),
                barcode: 'barcode2'
            };
            bookLibrary = new Library('spain', 'history');
            magazineLibrary = new Library('eeuu', 'stories');
            bookLibrary.add(book1);
            books = await get('/books');
            products = [
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
            ];
            console.table(products);
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
        }
    };
});
