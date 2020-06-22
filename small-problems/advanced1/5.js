function merge(list1, list2) {
  let result = [];

  let idx1 = 0;
  let idx2 = 0;

  if (list1.length === 0) {
    return list2;
  }

  if (list2.length === 0) {
    return list1;
  }

  while (idx1 < list1.length || idx2 < list2.length) {
    let element1 = list1[idx1];
    let element2 = list2[idx2];

    if (!element2 || element1 <= element2) {
      result.push(element1);
      idx1++;
    } else {
      result.push(element2);
      idx2++;
    }
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
