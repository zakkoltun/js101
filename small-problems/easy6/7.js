function swapName(fullName) {
  let names = fullName.split(' ');
  let lastName = names[names.length - 1];
  let firstNames = names.slice(0, names.length - 1).join(' ');
  return lastName + ', ' + firstNames;
}

console.log(swapName('Joe Roberts'));
console.log(swapName('Karl Oskar Henriksson Ragvals'));
