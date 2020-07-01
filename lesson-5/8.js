// 8.
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = ['a', 'e', 'i', 'o', 'u'];

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(letter => {
      if (vowels.includes(letter)) console.log(letter);
    });
  });
});
