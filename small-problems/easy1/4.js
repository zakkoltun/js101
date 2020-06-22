let rl = require('readline-sync');
const metersToFeetMultiplier = 10.7639;

console.log('Enter the length of the room in meters:');
let lengthInMeters = rl.prompt();

console.log('Enter the width of the room in meters:');
let widthInMeters = rl.prompt();

let areaInMeters = (lengthInMeters * widthInMeters).toFixed(2);
let areaInFeet = (areaInMeters * metersToFeetMultiplier).toFixed(2);

console.log(`The area of the room is ${ areaInMeters } square meters (${ areaInFeet } square feet).`);
