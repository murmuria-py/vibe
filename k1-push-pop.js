const queue = ['письмо', 'отчёт']

const newLength = queue.push('кот')
const removed = queue.pop()

console.log('Новая длина:', newLength)
console.log('Снято:', removed)
console.log('Массив:', queue)