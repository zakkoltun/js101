let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(letter => letter === 't').length;
(statement2.match(/t/g) || []).length;
