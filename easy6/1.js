function repeater(string) {
  let doubled = [];
  for (let i = 0; i < string.length; i += 1) {
    doubled.push(string[i], string[i]);
  }
  return doubled.join('');
}

console.log(repeater('Hello'));
