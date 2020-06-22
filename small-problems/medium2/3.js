/*
  Input:
    - 3 numbers
  Output:
    - 1 string
      - acute, right, obtuse, or invalid

  Valid:
    - sum of angles = 180
    - each angle > 0

  Right: 1 angle = 90
  Acute: all angles < 90
  Obtuse: 1 angle > 90
*/


function triangle(x, y, z) {
  let angles = [x, y, z];

  if (!isValid(angles)) {
    return 'invalid';
  } else {
    return getTriangleType(angles);
  }
}

function isValid(angles) {
  let total = angles.reduce((total, angle) => total + angle);
  let allNonZero = angles.every(angle => angle > 0);

  return total === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return 'right';
  } else if (angles.every(testAcuteTriangle)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}


function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
