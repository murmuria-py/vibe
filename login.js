const raw = process.argv[2]

function checkLogin(raw) {
  if (raw.trim().length === 0) {
    throw new Error('логин пустой')
  }
  if (raw.trim().length > 12) {
    throw new Error('логин слишком длинный')
  }
  return raw.trim().toUpperCase()
}

try {
  const raw = process.argv[2]
  console.log(checkLogin(raw))
} catch (error) {
  console.log('ошибка:', error.message)
}