// 9.
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let sortedSubs = arr.map(subArr => {
  return subArr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
});
console.log(sortedSubs);