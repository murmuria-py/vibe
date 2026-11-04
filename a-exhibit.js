const exhibit = {
  title: 'Восток-1',
  location: { hall: 'Космос', floor: 2 },
  year: 1961,
};

console.log(`Зал: ${exhibit.location.hall}`);
console.log(`Этаж: ${exhibit.location.floor}`);

const names = Object.keys(exhibit);
names.forEach((name) => {
  console.log(`Свойство: ${name}`);
});

const lastName = names[names.length - 1];
console.log(`Значение ${lastName}: ${exhibit[lastName]}`);