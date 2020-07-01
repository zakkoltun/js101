function allEven(numbers) {
  return numbers.every(number => number % 2 === 0);
}

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let allEvens = arr.filter(obj => {
  return Object.values(obj).every(numbers => allEven(numbers));
});

console.log(allEvens);