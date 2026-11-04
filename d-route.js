const route = {
  number: 'М7',
  start: { city: 'Москва', stop: 'Киевский вокзал' },
  finish: { city: 'Калуга', stop: 'Площадь Победы' },
  minutes: 180,
};

const summary = { 
  route: route.number,
  from: route.start.city,
  to: route.finish.city,
  minutes: route.minutes
};

const stroka = JSON.stringify(summary);
const upStroka = JSON.parse(stroka);

console.log('Маршрут:', route.number)
console.log('Отправление:', route.start.stop)
console.log(stroka)
console.log('Проверка:', upStroka.to)
