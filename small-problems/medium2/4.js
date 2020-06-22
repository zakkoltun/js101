function fridayThe13ths(year) {
  const FRIDAY = 5;
  let count = 0;

  for (let month = 0; month < 12; month += 1) {
    let dayOfWeek = new Date(year, month, 13).getDay();
    if (dayOfWeek === FRIDAY) {
      count += 1;
    }
  }

  return count;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
