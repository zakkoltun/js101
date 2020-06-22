/*

Write a function that computes the sum of all numbers between 1 and some other 
number, inclusive, that are multiples of 3 or 5. For instance, if the supplied 
number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.


Understand the problem

Inputs:
  - number
  - Can assume that input is integer greater than 1
Output:
  - number
    - sum of all numbers between input number and 1 that are multiples of 3 or 5
    - include input number in sum if applicable

Examples:
  multisum(5);
    // 3 + 5 = 8
  multisum(10);
    // 3 + 5 + 6 + 9 + 10 = 33

Algorithm:
  Loop through numbers between 1 and number (inclusive)
    If current number is multiple of 3 or 5, add to output result
  Return result

*/

function multipleOf3Or5(number) {
  return number % 3 === 0 || number % 5 === 0;
}

function multisum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    if (multipleOf3Or5(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
