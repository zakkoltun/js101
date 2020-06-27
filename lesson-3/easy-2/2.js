let numbers = [1, 2, 3, 4, 5];
let reversed = numbers.slice().reverse();
console.log(reversed);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
reversed = [...numbers].sort((num1, num2) => num2 - num1);
console.log(reversed);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

reversed = [];
numbers.forEach(num => reversed.unshift(num));
console.log(reversed);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

reversed = numbers.reduce((acc, curr) => [curr].concat(acc), []);
console.log(reversed);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

