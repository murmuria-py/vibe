let limit = Number(process.argv[2]);

let sum = 0

for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
        continue
    }

    sum += i;
}

console.log(`сумма нечётных до ${limit}: ${sum}, она ${sum % 2 === 0 ? 'чётная' : 'нечётная'}`);