/*
  Input:
    - 1 number
      - positive integer
  Output:
    - 1 number
      - sum of input digits

  Rules:
    - Use list processing techniques
      - map, filter, reduce, etc

  Algorithm:
    Convert number to string, split digits into array
    Reduce array to get sum
*/

function sum(num) {
  let digitList = String(num).split('');
  let reducer = (accumulator, current) => accumulator + parseInt(current);

  return digitList.reduce(reducer, 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
