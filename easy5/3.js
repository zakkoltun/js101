/* 
  Input:
    - 1 array
  Output:
    - 1 2D array
      - Array that contains two arrays
*/

function halvsies(array) {
  let splitIndex = Math.ceil(array.length / 2);
  let halves = [];

  halves.push(array.slice(0, splitIndex));
  halves.push(array.slice(splitIndex));

  return halves;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));

