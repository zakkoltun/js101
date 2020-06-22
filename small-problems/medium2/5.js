function uniqueDigits(number) {
  let digits = String(number).split('');
  let uniqueDigits = [...new Set(digits)];

  return digits.length === uniqueDigits.length;
}

function oddMultipleOf7(number) {
  if (number % 2 === 1 && number % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

function featured(number) {
  const MAX_NUM = 9876543201;
  for (let toCheck = number + 1; toCheck <= MAX_NUM; toCheck += 1) {
    if (oddMultipleOf7(toCheck) && uniqueDigits(toCheck)) {
      return toCheck;
    }
  }

  return 'There is no possible number that fulfills those requirements.';
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543200));
console.log(featured(9876543201));
