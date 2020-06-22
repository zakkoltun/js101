function binarySearch(list, item) {
  let searchArr = list.slice();
  let startIdx = 0;

  while (searchArr.length > 1) {
    let mid = Math.floor(searchArr.length / 2);

    if (searchArr[mid] === item) {
      return startIdx + mid;
    } else if (searchArr[mid] < item) {
      startIdx += mid + 1;
      searchArr = searchArr.slice(mid + 1);
    } else {
      searchArr = searchArr.slice(0, mid);
    }
  }

  if (searchArr[0] === item) {
    return startIdx;
  } else {
    return -1;
  }
}


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
