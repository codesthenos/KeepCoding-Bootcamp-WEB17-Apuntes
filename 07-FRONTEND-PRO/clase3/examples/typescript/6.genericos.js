System.register("6.genericos", [], function (exports_1, context_1) {
    "use strict";
    var Library, book1, book2, book3, magazine1, magazine2, bookLibrary, magazineLibrary, books;
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
        }
    };
});
