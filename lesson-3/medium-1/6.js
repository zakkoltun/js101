let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false

function checkNaN(value) {
  return Number.isNaN(value) && String(value) === 'NaN';
}
