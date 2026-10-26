let sum = 0

for (let i = 1; i <= 5; i++) {
  sum += i
  if (i === 3) {
    continue
  }
  console.log(i)
}

console.log('сумма:', sum)