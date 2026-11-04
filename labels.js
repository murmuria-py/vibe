const raw = 'утро,день,вечер'
const labels = raw.split(',')
const line = labels.join(' | ')
console.log('Элементов:', labels.length)
console.log('Строка:', line)