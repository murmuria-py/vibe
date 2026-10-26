let distance = Number(process.argv[2]);
let speed = Number(process.argv[3]);
let stopMinutes = Number(process.argv[4]);

function calcTripMinutes(distance, speed, stopMinutes) {
    if (distance < 0 || speed < 0) {
        return 0
    }
    const time = (distance / speed) * 60
    const fulltime = time + stopMinutes
    return fulltime
}

function printTrip(distance, fulltime) {
    console.log(`Маршрут ${distance} км: ${fulltime} мин.`)
}

printTrip(Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]))