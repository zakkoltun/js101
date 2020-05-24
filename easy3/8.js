/*
  Inputs:
    - 3 numbers
    - each represents a grade
  Output:
    - 1 string
      - represents a letter grade
*/

function percentToLetterGrade(percent) {
  if (90 <= percent) {
    return 'A';
  } else if (percent < 90 && percent >= 80) {
    return 'B';
  } else if (percent < 80 && percent >= 70) {
    return 'C';
  } else if (percent < 70 && percent >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;
  
  return percentToLetterGrade(average);
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
