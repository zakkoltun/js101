// 13.
function sumOfOdds(list) {
  return list
    .filter(num => num % 2 === 1)
    .reduce((acc, curr) => acc + curr, 0);
}

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((arr1, arr2) => {
  return sumOfOdds(arr1) - sumOfOdds(arr2);
});

console.log(arr);