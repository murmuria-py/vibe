const numbers = [2, 4, 5]

function printNumber(number) {
  console.log('Число:', number)
}

numbers.forEach(printNumber)

const doubled = numbers.map((number) => number * 2)
console.log('Удвоенные:', doubled)

const even = numbers.filter((number) => number % 2 === 0)
console.log('Чётные:', even)

console.log('Исходный:', numbers)