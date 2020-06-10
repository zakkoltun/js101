function bubbleSort(array) {
  let noSwapsMade = false;
  let lastUnsorted = array.length - 1;

  while (!noSwapsMade) {
    noSwapsMade = true;

    for (let i = 0; i < lastUnsorted; i += 1) {
      if (array[i] > array[i + 1]) {
        noSwapsMade = false;
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }

    lastUnsorted -= 1;
  }

  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);
