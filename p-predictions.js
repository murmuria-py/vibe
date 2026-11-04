const queue = ['а', 'б']
console.log('P1 return push:', queue.push('в'))
console.log('P1 array:', queue)

const last = queue.pop()
console.log('P2 return pop:', last)
console.log('P2 array:', queue)

const eachResult = queue.forEach((item) => console.log('P3 item:', item))
console.log('P3 return:', eachResult)

const missing = queue.map((item) => { item.toUpperCase() })
console.log('P4 map:', missing)

const joined = [1, 2, 3].reduce((result, number) => result + number, '')
console.log('P5 reduce:', joined)