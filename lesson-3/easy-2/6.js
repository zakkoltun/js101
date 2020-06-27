let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let newFlintstones = flintstones.reduce((acc, curr) => acc.concat(curr), []);

console.log(newFlintstones);


