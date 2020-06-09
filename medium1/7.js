/*
function fibonacci(n) {
  let fib1 = 1; // n - 1
  let fib2 = 0; // n - 2

  let fibN = 1; // current fibonacci
  
  if (n == 0 || n == 1) {
    return 1;
  }

  for (let i = 2; i <= n; i++) {
    fibN = fib1 + fib2;
    fib2 = fib1;
    fib1 = fibN;
  }

  return fibN;
}
*/

function fibonacci(n) {
  let previousTwo = [1, 1];

  for (let count = 3; count <= n; count += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]]
  }

  return previousTwo[1];
}

console.log(fibonacci(20));

