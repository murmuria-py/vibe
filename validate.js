function checkPrice(price) {
  if (price <= 0) {
    throw new Error('цена должна быть больше нуля')
  }
  return price
}

try {
  const price = checkPrice(Number(process.argv[2]))
  console.log('цена принята:', price)
} catch (error) {
  console.log('ошибка:', error.message)
}

console.log('проверка завершена')