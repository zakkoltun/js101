function rotate90(matrix) {
  let columns = [];

  let numRows = matrix.length;
  let numCols = matrix[0].length;

  for (let count = 0; count < numCols; count += 1) {
    columns.push([]);
  }

  for (let i = 0; i < numCols; i += 1) {
    for (let j = numRows - 1; j >= 0; j -= 1) {
      columns[i].push(matrix[j][i]);
    }
  }

  return columns;
}


let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
