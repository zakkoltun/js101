/*
  Input:
    - 2 arrays
      - each contains list of numbers
      - neither will be empty
  Output:
    - 1 array
      - contains products of all combinations of number pairs between inputs
*/

function multiplyAllPairs(array1, array2) {
  let products = [];

  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j += 1) {
      products.push(array1[i] * array2[j]);
    }
  }

  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
    
