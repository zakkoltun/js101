/*
  Input:
    - 1 two-dimensional array
      - each element contains two element array
        - [fruit, quantity]
  Output:
    - 1 array
      - contains names of fruits, appearing number of times in input quantity

  Algorithm:
    Initialize empty fruit list array
    For each element in 2D array
      For number of times in quanity
        Push fruit name to fruit list
    Return fruit list
*/

function buyFruit(groceryList) {
  let fruits = [];

  groceryList.forEach(item => {
    let fruitName = item[0];
    let quantity = item[1];

    for (let num = 1; num <= quantity; num += 1) {
      fruits.push(fruitName);
    }
  });

  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
