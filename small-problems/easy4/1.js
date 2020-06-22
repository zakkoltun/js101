
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Teddy is ${ getRandomInt(20, 120) } years old!`);
