function calcDiscountedPrice(price, percent) {
  if (percent <= 0) {
    return price
  }
  if (percent >= 100) {
    return 0
  }
  const discount = price * (percent / 100)
  const finalPrice = price - discount
  return finalPrice
}

function printReceipt(price, percent) {
  const finalPrice = calcDiscountedPrice(price, percent)
  console.log(`Цена ${price} со скидкой ${percent}%: к оплате ${finalPrice}`)
}

printReceipt(Number(process.argv[2]), Number(process.argv[3]))