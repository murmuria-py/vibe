const titles = ['Дюна', 'Солярис']

for (const key in titles) {
  console.log(key, typeof key)
}

for (const title of titles) {
  console.log(title)
}