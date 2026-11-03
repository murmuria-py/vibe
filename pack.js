const rawAddress = process.argv[2]
const weight = Number(process.argv[3])

function packOrder(rawAddress, weight) {
  if (isNaN(weight) || weight <= 0) {
    throw new Error('вес должен быть больше нуля')
  }  
  const raw = rawAddress.trim().toUpperCase()
  const quan = weight / 6
  const boxes = Math.ceil(quan)
  
  const deliveryType = raw.includes('МОСКВА') ? 'по городу' : 'за город'
  
  return `${raw}: коробок ${boxes}, ${deliveryType}`
}

try {
  console.log(packOrder(rawAddress, weight))
} catch (error) {
  console.log('ошибка:', error.message)
}