/*
  Input: 
    - 2 arrays
      - assume that both arrays are non-empty & have same # of elements
  Output:
    - 1 array
      - contains elements from 2 input arrays, alternating between inputs
*/

function interleave(array1, array2) {
  let interleaved = [];
  
  for (let i = 0; i < array1.length; i += 1) {
    interleaved.push(array1[i], array2[i]);
  }

  return interleaved;
}

let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];

console.log('Array 1 before: ' + array1);
console.log(interleave(array1, array2));
console.log('Array 1 after: ' + array1);
