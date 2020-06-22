/*

  Write a function that takes two strings as arguments, determines the longer 
  of the two strings, and then returns the result of concatenating the shorter
  string, the longer string, and the shorter string once again. You may assume 
  that the strings are of different lengths.

  Understand the problem:
    Inputs
      - Two strings of different lengths
          - Don't need to handle cases for same length
          - Don't need to validate inputs
    Output
      - One string
        - Two input strings concatenated (short + long + short)

    Rules
      - Return concatenation of input strings (short + long + short)
      - Empty strings can just be treated as the shorter string

    Algorithm
      - Compare string lengths and determine short and long string
      - Concatenate and return strings (short + long + short)
*/

function shortLongShort(string1, string2) {
  let shortString = string1.length < string2.length ? string1 : string2;
  let longString  = string1.length > string2.length ? string1 : string2;

  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('', 'xyz'));
console.log(shortLongShort('AAAAA', 'B'));
