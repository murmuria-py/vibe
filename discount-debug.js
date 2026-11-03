function calcDiscountedPrice(price, percent) {
  return price - price * (percent / 100)
}
function printReceipt(price, percent) {
  const finalPrice = calcDiscountedPrice(price, percent)
  console.log(`Цена ${price} со скидкой ${percent}%: к оплате ${finalPrice}`)
}
printReceipt(Number(process.argv[2]), Number(process.argv[3]))