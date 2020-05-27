/*
  Input:
    - 2 arrays
      - assume both arrays have same length
  Output:
    - 1 array
      - elements are the product of corresponding elements in each input array
*/

function multiplyList(list1, list2) {
  let multipliedList = [];

  for (let i = 0; i < list1.length; i += 1) {
    multipliedList.push(list1[i] * list2[i]);
  }

  return multipliedList;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
