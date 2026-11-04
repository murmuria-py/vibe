const books = [
  { title: 'Дюна', pages: 412 },
  { title: 'Солярис', pages: 204 },
  { title: 'Слепота', pages: 320 },
  { title: 'Мы', pages: 176 }
]

const sorted = books.filter(books => books.pages > 300)
sorted.forEach(books => console.log(`Книга: ${books.title}`))

const total = sorted.reduce((result, books) => result + books.pages, 0)

console.log('Страниц:', total)