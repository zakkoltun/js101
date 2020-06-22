/*
  Input:
    - 1 array
  Output:
    - log each element with number of occurrences

  Algorithm:
    Maintain object for counting elements
    For each element in array
      If object doesn't have key that matches element
        Create key using the element and set value to 0
      Increment value for corresponding element in object by 1
    For each key in object, log key => value
*/

function countOccurrences(array) {
  let itemCount = { };
  array.forEach(element => {
    if (!itemCount[element]) {
      itemCount[element] = 0;
    }

    itemCount[element] += 1;
  });

  Object.keys(itemCount).forEach(key => 
    console.log(`${ key } => ${ itemCount[key] }`));
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
