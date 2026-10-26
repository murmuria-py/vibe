let qty = Number(process.argv[2]);
let people = Number(process.argv[4]);
let price = Number(process.argv[3]);
let sum = qty * price;
let share = sum / people;

console.log(`${qty} кофе по ${price} руб = ${sum} руб; делим на ${people} – с каждого ${share} руб`);