const age = Number(process.argv[2])
const access = age >= 18 ? 'колбаса' : 'сыр'
console.log(access)