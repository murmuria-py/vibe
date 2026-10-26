const score = Number(process.argv[2])

let level
if (score === 90) {
  level = 'отлично'
} else {
  level = 'нормально'
}

switch (score) {
  case 90:
    console.log('верхняя граница')
    break
  case 80:
    console.log('около 80')
    break
  default:
    console.log('другой диапазон')
}

console.log('уровень:', level)