let rast = Number(process.argv[2]);
let oil = Number(process.argv[3]);
let price = Number(process.argv[4]);
let people = Number(process.argv[5]);

let raskh = (rast / 100) * oil;
let cena = raskh * price;
let share = cena / people;

console.log(`Поездка ${rast} км: ${raskh} л, ${cena} руб., с каждого по ${share} руб.`);