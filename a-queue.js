const queue = ['письмо', 'отчёт']

const removed = queue.pop()
const newLength = queue.push('заявка')

function printQueue(queue) {
  console.log(queue)
}

console.log('Новая длина:', newLength)
console.log('Снято:', removed)
console.log('Массив:', queue)

queue.forEach(printQueue)