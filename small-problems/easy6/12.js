/*
  Input: 
    - 1 string
  Output:
    - boolean
      - true if all parentheses are balanced
      - false otherwise

  Algorithm:
    Create array with only parentheses (in order)
    While array isn't empty
      If leftmost element is ')' or rightmost is '(', return false
      Find pair of matching parentheses next to each other: ( followed by )
      Remove pair
    Return true
*/

function removeClosedParentheses(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] === '(' && array[i+1] === ')') {
      array.splice(i, 2); // remove closed parentheses from array
    }
  }
  return array;
}

function isBalanced(sentence) {
  let parens = sentence.split('').filter(chr => chr === '(' || chr === ')');

  while (parens.length > 0) {
    console.log(parens);
    if (parens[0] === ')' || parens[parens.length - 1] === '(') {
      return false;
    }
    removeClosedParentheses(parens);
  }

  return true;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
