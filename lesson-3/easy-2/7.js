let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let barney = Object.entries(flintstones).filter(nameAge => nameAge[0] === 'Barney')[0];
console.log(barney);
