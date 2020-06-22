function fibonacciVals(nth) {
  let vals = {
    1: 1,
    2: 1,
    3: 2
  };

  if (nth == 1 || nth == 2) {
    return [1, vals];
  } else if (nth == 3) {
    return [2, vals];
  }

  let prev, current;

  [prev, vals] = fibonacciVals(nth - 1);
  current = prev + vals[nth - 2];
  vals[nth] = current;

  return [current, vals];
}


function fibonacci(nth) {
  return fibonacciVals(nth)[nth];
}

  

//console.log(fibonacci(1));
//console.log(fibonacci(2));
//console.log(fibonacci(5));
console.log(fibonacci(8));
