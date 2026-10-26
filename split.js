let bill = Number(process.argv[2]);
let people = Number(process.argv[3]);

if (people <= 0) {
  console.log('Некорректный ввод: людей должно быть больше нуля');
} else if (bill % people === 0) {
  console.log(`Счёт делится нацело: по ${bill / people} с человека`);
} else {
  console.log(`Не делится нацело: лишних рублей ${bill % people}`);
}