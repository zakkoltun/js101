// 5.
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Object.values(munsters)
  .filter(info => info.gender === 'male')
  .reduce((totalAge, currentInfo) => totalAge + currentInfo.age, 0);