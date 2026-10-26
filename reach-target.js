let start = Number(process.argv[2]);
let daily = Number(process.argv[3]);
let target  = Number(process.argv[4]);
let limit = Number(process.argv[5]);

let currentSum = start;
let isTargetReached = false;
let reachedDay = 0;

for (let day = 1; day <= limit; day++) {
    currentSum += daily;

    if (currentSum >= target) {
        isTargetReached = true;
        reachedDay = day;
        break;
    }
}

// Проверяем состояние флага после цикла
if (isTargetReached) {
    console.log(`Цель достигнута на день ${reachedDay}. Сумма: ${currentSum}`);
} else {
    console.log(`Цель не достигнута за ${limit} дней. Итоговая сумма: ${currentSum}`);
}