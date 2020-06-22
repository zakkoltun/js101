const INVALID = 'invalid';
const EQUILATERAL = 'equilateral';
const ISOSCELES = 'isosceles';
const SCALENE = 'scalene';


function triangle(side1, side2, side3) {
  if (!isValid(side1, side2, side3)) {
    return INVALID;
  }

  if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    return SCALENE;
  } else if (side1 === side2 && side1 === side3) {
    return EQUILATERAL;
  } else {
    return ISOSCELES;
  }
}


function isValid(side1, side2, side3) {
  let shortest, middle, longest;
  [shortest, middle, longest] = [side1, side2, side3].sort();

  if (shortest <= 0) {
    return false;
  }
  
  if (longest > shortest + middle) {
    return false;
  }

  return true;
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
