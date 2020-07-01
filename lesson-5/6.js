// 6.
for (let member in munsters) {
  let age = munsters[member].age;
  let gender = munsters[member].gender;
  console.log(`${member} is a ${age}-year-old ${gender}`);
}