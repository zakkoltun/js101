/*
  Inputs:
    - 1 number
  Output:
    - 1 number
      - first fibonacci number with the number of digits specified in input

  Algorithm:
    

*/

function getNumberLength(number) {
  return number.toString().length;
}

function fibonacci(number) {
  if (number === 0 || number === 1) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

function findFibonacciIndexByLength(length) {
  let index = 1; 
  let fibonacciValue = 1;

  while (getNumberLength(fibonacciValue) < length) {
    index += 1;
    fibonacciValue = fibonacci(index);
  }

  return index;
}
    
console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(3));       // 12
console.log(findFibonacciIndexByLength(10));      // 45
//console.log(findFibonacciIndexByLength(16));      // 74


// This algorithm is extremely inefficient. I should have maintained the
// previously calculated values and used those for each iteration, instead
// of calculating the fibonacci value each time.
