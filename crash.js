function checkPrice(price) {
  if (price <= 0) {
    throw new Error('цена должна быть больше нуля')
  }
  return price
}
checkPrice(-5)