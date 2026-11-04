let prices = [100, 80, 120]
const added = prices.push(150)
const discounted = prices.map((prices) => prices * 0.9)
const total = discounted.reduce((sum, price) => sum + price, 0)
console.log('Итого:', total)