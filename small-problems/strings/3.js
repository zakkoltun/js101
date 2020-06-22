function letterCaseCount(string) {
  const counts = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach(character => {
    if (/[a-z]/.test(character)) {
      counts.lowercase += 1;
    } else if (/[A-Z]/.test(character)) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  });

  return counts;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));
