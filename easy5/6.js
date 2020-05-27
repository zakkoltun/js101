/*
  Input:
    - 1 array
      - array of integers
  Output:
    - 1 string
      - multiply all integers in array, then divide by number of integers
      - conver to string, rounded to 3 decimal places

  Algorithm:
    Reduce array using a multiplication function
    Divide result of reduce by length of array
    Convert to string, rounded to 3 decimal places (toFixed)
*/

function multiplicativeAverage(array) {
  let reducer = (accumulator, currentValue) => accumulator * currentValue;
  let multiplied = array.reduce(reducer);
  let average = multiplied / array.length;

  return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
