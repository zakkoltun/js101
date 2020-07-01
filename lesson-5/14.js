function capitalize(word ) {
  return word[0].toUpperCase() + word.slice(1);
}

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorsAndSizes = Object.values(obj).map(info => {
  if (info['type'] === 'fruit') {
    return info['colors'].map(color => capitalize(color));
  } else {
    return info['size'].toUpperCase();
  }
});

console.log(colorsAndSizes);