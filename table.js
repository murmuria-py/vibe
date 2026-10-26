const total = 1230;
function share(sum, count) {
  return sum / count;
}
for (let people = 2; people <= 6; people = people + 1) {
  if (total % people === 0) {
    console.log(`${people} чел.: ровно по ${share(total, people)}`);
  } else {
    console.log(`${people} чел.: не поровну, лишних ${total % people}`);
  }
}