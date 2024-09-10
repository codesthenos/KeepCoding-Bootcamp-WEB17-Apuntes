document.querySelector('body').innerHTML = `
<h1 style='text-align: center';> ejercicio clase 3/4 WEB17-IntroJS-Clase3/ejercicios/ejercicio7.js</h1>
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

const getTitles = (books) => {
  const titlesList = []
  for (let book of books) {
    if (book.year > 2000) {
      titlesList.push(book.title)
    }
  }
  return titlesList
}

const bookTitles = getTitles(books).join('\n')

console.log(bookTitles)