/*
  Input: 
    - 1 string
    - assume non-empty (min 1 length)
  Output:
    - 1 string
      - either 1 or 2 characters depending on even/odd length of input
      - middle characters of input string

  Algorithm:
    Set middle index to floor of input length / 2
    Slice input to return middle character or two middle characters
      slice(middle index, middle index + 1) for odd
      slice(middle index - 1, middle index + 1) for even
    Return slice


  [0, 1, 2, 3, 4]
    length = 5
    middle index = 2
    slice(2, 3)

  [0, 1, 2]
    length = 3
    middle index = 1
    slice(1, 2)

  [0, 1]
    length = 2
    middle index = 1
    slice(0, 2) 

  [0, 1, 2, 3]
    length = 4
    middle index = 2
    slice(1, 3)
*/

function centerOf(string) {
  let midIndex = Math.floor(string.length / 2);
  let center = string.length % 2 == 0 ? 
                string.slice(midIndex - 1, midIndex + 1) : string[midIndex];
  return center;
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));

