// 1.
let numbers = [1, 2, 3, 4];
console.log(numbers);

while (numbers.length > 0) {
  numbers.pop();
}

console.log(numbers);

// 2.
numbers = [1, 2, 3, 4];
console.log(numbers);

numbers = [];

console.log(numbers);

// 3.
numbers = [1, 2, 3, 4];
console.log(numbers);

numbers = numbers.filter(number => false);

console.log(numbers);

// 4.
numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.splice(0, numbers.length);

console.log(numbers);

