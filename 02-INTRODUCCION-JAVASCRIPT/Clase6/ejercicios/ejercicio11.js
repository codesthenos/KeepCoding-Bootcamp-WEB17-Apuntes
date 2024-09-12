document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/ejercicios/ejercicio11.js</h1>
`

const books = [
  { title: '1984', author: 'George Orwell', year: 1949 },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997
  },
  { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
  { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 }
]

// ejercicio7.js pero con filter y map

// filtro los libros por el año 2000
const booksYear2000 = books.filter(book => book.year > 2000)

// mapeo los libros para solo tener sus titulos
const titlesYear2000 = booksYear2000.map(book => book.title)

// refactor, mas bien concatenacion de funciones
const refactoredTitles = books.filter(({ year }) => year > 2000).map(book => book.title).join('\n')

// muestro los titulos en consola
console.log('filter y map en dos constantes distintas:\n', titlesYear2000.join('\n'))

console.log('filter y map en la misma constante:\n', refactoredTitles)