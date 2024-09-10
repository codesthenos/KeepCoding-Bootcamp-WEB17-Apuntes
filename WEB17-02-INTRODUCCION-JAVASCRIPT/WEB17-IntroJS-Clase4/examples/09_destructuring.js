document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/examples/08_objetos.js</h1>
`
// object
// no destructuring
const twilight = { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 }
console.log('No destructuring title:', twilight.title)
console.log('No destructuring author:', twilight.author)
console.log('No destructuring year:', twilight.year)
console.log('\n')
// destructuring
const { title, author, year } = { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 }
console.log('Destructuring title:', title)
console.log('Destructuring author:', author)
console.log('Destructuring year:', year)

// array of objects
// no destructuring
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
const book1 = books[0]
console.log(book1)

// destructuring
const [firstBook, secondBook, thirdBook, fourthBook, fifthBook, sixthBook] = [
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
console.log(
  'firstBook:',
  fifthBook,
  '\nsecondBook:',
  secondBook,
  '\nthirdBook:',
  thirdBook,
  '\nfourthBook:',
  fourthBook,
  '\nfifthBook:',
  fifthBook,
  '\nsixthBook:',
  sixthBook
)