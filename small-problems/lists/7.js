/*
  Input:
    - 1 array
      - array of numbers
  Output:
    - 1 number
      - sum of sums of each leading subsequence
*/

function sumOfSums(numbers) {
  let totalSum = 0;

  for (let i = 1; i <= numbers.length; i += 1) {
    totalSum += numbers.slice(0, i).reduce((sum, num) => sum + num, 0);
  }

  return totalSum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
