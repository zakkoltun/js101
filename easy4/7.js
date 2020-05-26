/*
  Input:
    - 1 array of numbers
  Output:
    - 1 array of numbers
      - numbers are a running total of numbers in input array
        - [2, 5, 13] => [2, 7, 20]
*/

function runningTotal(array) {
  let runningTotal = []
  let currentTotal = 0;

  for (let i = 0; i < array.length; i += 1) {
    runningTotal.push(currentTotal + array[i]);
    currentTotal += array[i];
  }

  return runningTotal;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
    
