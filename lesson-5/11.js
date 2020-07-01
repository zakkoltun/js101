// 11.
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let incremented = arr.map(obj => {
  let objCopy = {};
  Object.assign(objCopy, obj);
  for (let prop in objCopy) {
    objCopy[prop] += 1;
  }
  return objCopy;
});
console.log(incremented);