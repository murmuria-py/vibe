let temp = [18, 23, 27, 16, 25]

const porog = 20

const temp2 = temp.filter((temp) => temp >= porog)

const cels = temp2.map((temp2) => `${temp2}°C`)

console.log('Подходящих измерений:', cels.length)

function printC(cels) {
  console.log(cels)
}

cels.forEach(printC)

const average = temp.reduce((result, temp) => result + temp, 0)

console.log('Среднее:', average / temp.length, `°C`)