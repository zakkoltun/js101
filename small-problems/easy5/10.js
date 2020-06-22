/*
  Input:
    - 1 array
      - assume never empty, always positive integers
  Output:
    - 1 number
      - average of all elements in input array, rounded down to integer
*/

function average(numbers) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let average = numbers.reduce(reducer, 0) / numbers.length;

  return Math.trunc(average);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));
