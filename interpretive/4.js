function printRowFromStarIndices(n, star1, star2) {
  let mid = Math.floor(n / 2);
  let row = new Array(n);

  if (star1 === star2) {
    row.fill('*');
  } else {
    row.fill(' ');

    row = row.map((element, index) => 
      [mid, star1, star2].includes(index) ? '*' : element);
  }

  console.log(row.join(''));
}


function star(n) {
  let star1 = 0;
  let star2 = n - 1;

  while (star2 >= 0) {
    printRowFromStarIndices(n, star1, star2);
    star1 += 1;
    star2 -= 1;
  }
}

star(9);
