const catalogJson = '[{"title":"Солярис","year":1961},{"title":"Мы","year":1924},{"title":"Пикник на обочине","year":1972}]'
const catalog = JSON.parse(catalogJson);

const sorted = catalog.filter(catalog => catalog.year >= 1950);

console.log('Подходящих книг:', sorted.length)

const newCatalog = sorted.map(({ title, year }) => ({ title, year }));
console.log(newCatalog)

const updatedJson = JSON.stringify(newCatalog)

const upCatalog = JSON.parse(updatedJson);
console.log('Проверка:', upCatalog.length)
