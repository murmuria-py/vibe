let category = process.argv[2]

cat = category.trim().toUpperCase()

let price = Number(process.argv[3])
pri = price.toFixed(2)

console.log(`${cat}: ${pri} руб.`)