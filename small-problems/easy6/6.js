/*
  Input:
    - 1 number
      - assume positive integer
  Output:
    - 1 array
      - array of all integers between 1 and argument (inclusive)
      - ascending order
*/

function sequence(num) {
  let seq = []
  for (let i = 1; i <= num; i += 1) {
    seq.push(i);
  }
  return seq;
}

console.log(sequence(5));
