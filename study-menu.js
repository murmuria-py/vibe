const readline = require('node:readline/promises')

function getStudyMinutes(choice, sessions) {
    switch (choice) {
    case 1:
      return sessions * 25
    case 2:
      return sessions * 5
    case 0:
      return 0
    default:
      return -1
  }
}

function printStudy(choice, sessions) {
  const minutes = getStudyMinutes(choice, sessions)
  if (minutes === -1) {
    console.log('Неизвестный режим')
    return
  }
  if (choice === 0) {
    console.log('Работа завершена')
    return
  }
  console.log(`Режим ${choice}: ${minutes} мин.`)
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

  console.log('1 – работа, 2 – перерыв, 0 – завершить')
  const choice = Number(await rl.question('Режим: '))

  let sessions = 0
  if (choice === 1 || choice === 2) {
    sessions = Number(await rl.question('Количество повторов: '))
  }

  printStudy(choice, sessions)
  rl.close()
}

main()