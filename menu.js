// Рабочий образец интерактивного меню.
// require, создание rl, вопросы await и rl.close() — готовая служебная оболочка.
// Обычные функции и ветки switch — учебный код: их пишут и меняют по задаче.

const readline = require('node:readline/promises')

function metersToCentimeters(meters) {
  return meters * 100
}

function printCentimeters(meters) {
  const centimeters = metersToCentimeters(meters)
  console.log(`${meters} м = ${centimeters} см`)
}

function rectanglePerimeter(width, height) {
  return 2 * (width + height)
}

function printPerimeter(width, height) {
  const perimeter = rectanglePerimeter(width, height)
  console.log(`Периметр ${width}x${height}: ${perimeter}`)
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

  console.log('Мастерская измерений')
  console.log('1 – перевести метры в сантиметры')
  console.log('2 – найти периметр прямоугольника')

  const action = Number(await rl.question('Выберите действие: '))

  switch (action) {
    case 1: {
      const meters = Number(await rl.question('Введите метры: '))
      printCentimeters(meters)
      break
    }
    case 2: {
      const width = Number(await rl.question('Введите ширину: '))
      const height = Number(await rl.question('Введите высоту: '))
      printPerimeter(width, height)
      break
    }
    default:
      console.log('Неизвестный пункт меню')
  }

  rl.close()
}

main()