/*
  Input:
    - 2 arrays
      - may assume that both inputs will always be arrays
  Output:
    - 1 array
      - Union of two input arrays
      - No duplicates, even if there are duplicates in input arrays
*/

function union(array1, array2) {
  // filter array2 by only leaving elements that aren't in array1, then concat
  return array1.concat(array2.filter(number => !array1.includes(number)));
}

console.log(union([1, 3, 5], [3, 6, 9]));
