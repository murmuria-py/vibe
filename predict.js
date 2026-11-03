function risky() { throw new Error('упс') }
console.log('до')
risky()
console.log('дальше')