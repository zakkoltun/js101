let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

// use this if you don't want any overwriting of identitcal properties
// Object.keys(additionalAges).forEach(key => ages[key] = additionalAges[key]);

// if overwriting is acceptable
Object.assign(ages, additionalAges);

console.log(ages);
