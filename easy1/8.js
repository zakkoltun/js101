/*

  In the modern era under the Gregorian Calendar, leap years occur in every
  year that is evenly divisible by 4, unless the year is also divisible by 100.
  If the year is evenly divisible by 100, then it is not a leap year, unless 
  the year is also evenly divisible by 400.

  Assume this rule is valid for any year greater than year 0. Write a function 
  that takes any year greater than 0 as input, and returns true if the year is 
  a leap year, or false if it is not a leap year.

  
  Understand the Problem
    Inputs
      - Number (any year greater than 0)
    Output
      - Boolean
        - true if input is leap year
        - false if input is not a leap year
    Rules
      - Leap year if:
        - divisible by 4, unless divisible by 100 and not 400

    Algorithm
      - Set return value to false
      - Check conditions and change return value to true if all are met
        - If year is divisible by 4 (good)
          - If year is not divisible by 100 (set to true)
          - If year is divisible by 100
            - If year is divisible by 400 (set to true)
      - Return value
*/

function isLeapYear(year) {
  let isLeapYear = false;

  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      isLeapYear = true;
    } else {
      if (year % 400 === 0) {
        isLeapYear = true;
      }
    }
  }
  return isLeapYear;
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
