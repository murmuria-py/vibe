const items = Number(process.argv[2])
const perBox = Number(process.argv[3])
console.log(Math.ceil(items / perBox))