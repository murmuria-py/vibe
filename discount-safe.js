const price = Number(process.argv[2])
const percent = Number(process.argv[3])

function applyDiscount(price, percent) {
  if (percent < 0) {
    throw new Error('процент скидки должен быть от 0 до 100')
    return
  }
  if (percent > 100) {
    throw new Error('процент скидки должен быть от 0 до 100')
    return
  }
  const discount = price * (percent / 100)
  const finalPrice = price - discount
  return finalPrice
}

try {
  console.log('итог:', applyDiscount(price, percent))
} catch (error) {
  console.log('ошибка:', error.message)
}