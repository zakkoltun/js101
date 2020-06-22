function mergeLists(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let mid = Math.trunc(array.length / 2);
  let array1 = mergeSort(array.slice(0, mid));
  let array2 = mergeSort(array.slice(mid));

  return mergeLists(array1, array2);
}


console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

/*

[6, 2, 7, 1, 4]
[[6, 2],
[[6], [2], 
[[2, 6], 
[[2, 6], [7, 1, 4]]
[[2, 6], [7], 
[[2, 6], [7], [1, 4]]
[[2, 6], [7], [1], [4]]
[[2, 6], [7], [1, 4]]
[[2, 6], [1, 4, 7]]
[1, 2, 4, 6, 7]

*/
