function range(start, end = -1) {
  let range = [];

  if (end < 0) {
    return rangeEnd(start);
  } 

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function rangeEnd(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));
