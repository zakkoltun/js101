let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log('Spot' in ages); // would include inherited properties
console.log(ages.hasOwnProperty('Spot')); // ignores inherited properties
