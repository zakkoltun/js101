// 1
[1, 2, 3].filter(_ => 'hi');
// returns [1, 2, 3], since 'hi' evalutes to truthy every time

// 2
/*
[1, 2, 3].map(num => {
  num * num;
});
*/
// [undefined, undefined, undefined]
// since map statement doesn't return anything

// 3
[1, 2, 3].map(num => num * num);
// [1, 4, 9], since one statement callbacks w/o braces automatically return

// 4
/*
['ant', 'bear', 'caterpillar'].pop().length;
*/
// 11, since pop returns the string that is removed, not the array

// 5
/*
[1, 2, 3].every(num => {
  return num = num * 2;
});
*/
// returns true, since 'return num = num * 2' always evaluates to true

// 6
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
// [1, 1, 1, 1, 1]. It's destructive (mutates caller)

// 7
/*
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
*/
// [undefined, 'ant']

// 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesPositions = {};

flintstones.forEach((name, idx) => {
  flintstonesPositions[name] = idx;
});

// 9
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

Object.values(ages).reduce((sum, age) => sum + age, 0);

// 10

Math.min(...Object.values(ages));


// 11
let statement = "The Flintstones Rock";
let letterFreq = {};

statement.split('').filter(char => char !== ' ').forEach(letter => {
  letterFreq[letter] = letterFreq[letter] || 0;
  letterFreq[letter] += 1;
});