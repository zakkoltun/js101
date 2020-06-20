function transpose(matrix) {
  let transposed = [];

  for (let col = 0; col < matrix[0].length; col += 1) {
    let newRow = matrix.map(row => row[col]);
    transposed.push(newRow);
  }

  return transposed;
}

function transposeInPlace(matrix) {
  for (let i = 0; i < matrix.length - 1; i += 1) {
    for (let j = 1; j < matrix.length; j += 1) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const matrix2 = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);
let newMatrix2 = transpose(matrix2);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(newMatrix2);
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
console.log(transpose([[1, 2, 3], [4, 3, 2], [3, 7, 8], [1, 2, 3], [4, 5, 6]]));
