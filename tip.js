const name = process.argv[2]
const bill = Number(process.argv[3])
const percent = Number(process.argv[4])

function calcTip(bill, percent) {
  if (percent < 0 || percent > 100) {
    throw new Error('процент чаевых должен быть от 0 до 100')
  }  
  tips = bill * (percent / 100)
  return tips
}

try {
  console.log(`${name.trim().toUpperCase()}: счет ${bill}, чаевые ${calcTip(bill, percent)}, итого ${bill + calcTip(bill, percent)}`)
} catch (error) {
  console.log('ошибка:', error.message)
}