/*

  This is a continuation of the previous exercise.

  The British Empire adopted the Gregorian Calendar in 1752, which was a leap 
  year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar,
  leap years occur in any year that is evenly divisible by 4.

  Using this information, update the function from the previous exercise to 
  determine leap years both before and after 1752.

  
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
  // Julian calendar
  if (year < 1752 && year % 4 === 0) {
    return true;
  }

  // Gregorian calendar
  if (year % 400 === 0)  {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
