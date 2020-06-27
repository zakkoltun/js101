let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

let regex = new RegExp('Dino', 'g');

console.log(regex.test(str1));
console.log(regex.test(str2));

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

