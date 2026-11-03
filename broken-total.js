const price = Number(process.argv[2])
const percent = Number(process.argv[3])
const serviceFee = 50

try {
  if (percent < 0 || percent > 100) {
    throw new Error('процент скидки должен быть от 0 до 100')
  }
  const discounted = price - price * (percent / 100)
  const rounded = discounted.toFixed(2)
  const total = Number(rounded) + Number(serviceFee)
  console.log('итог:', total)
}

catch (error) {
  console.log('ошибка:', error.message)
}