function sumSquareDifference(num) {
  return squareTheSum(num) - sumTheSquares(num);
}

function squareTheSum(num) {
  let nums = getCountInts(num);
  return (nums.reduce((sum, n) => sum + n) ** 2);
}

function sumTheSquares(num) {
  let nums = getCountInts(num);
  return nums.reduce((sum, n) => sum + n**2);
}

function getCountInts(num) {
  return [...Array(num).keys()].map(n => n + 1);
}


/*
function squareTheSums(num) {
  let sum = 0;
  for (let n = 1; n <= num; n += 1) {
    sum += n;
  }

  return sum**2;
}


function sumTheSquares(num) {
  let sumOfSquares = 0;

  for (let n = 1; n <= num; n += 1) {
    sumOfSquares += n**2;
  }
  
  return sumOfSquares;
}
*/


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
