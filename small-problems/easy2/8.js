/*

  Inputs:
    - array (can contain any type of object)
  Output:
    - array
      - contains every other element of input array, starting with first 
        element (indices 0, 2, 4, etc.)
*/

function oddities(array) {
  let oddElements = []

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
