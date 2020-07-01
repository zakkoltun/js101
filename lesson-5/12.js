// 12.
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiplesOf3 = arr.map(arr => {
  return arr.filter(num => num % 3 === 0);
});

console.log(multiplesOf3);