/*
  Input:
    - 2 numbers
      - first is count (always >= 0)
      - second starting number of a sequence (is any integer)
  Output:
    - 1 array
      - array contains same number of elements as count
      - each element should be multiple of second argument
*/

function sequence(count, start) {
  let seq = [];

  for (let multiplier = 1; multiplier <= count; multiplier += 1) {
    seq.push(start * multiplier);
  }

  return seq;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));
