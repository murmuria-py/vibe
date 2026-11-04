const books = [
  { title: 'Дюна', pages: 604 },
  { title: 'Солярис', pages: 288 },
  { title: 'Тристан', pages: 11 },
  { title: 'Мордред', pages: 4 },
  { title: 'Парсифаль', pages: 1 }
]

const limit = 604
for (let i = 0; i < books.length; i++) {
  if (books[i].pages > limit) {
    console.log(books[i].title)
  }
}  