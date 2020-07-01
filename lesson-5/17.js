// need random hex number generator function
// need way to concat 8, 4, 4, 4, then 12 hex chars

const HEX_CHARS = [
  '0', '1', '2', '3',
  '4', '5', '6', '7',
  '8', '9', 'a', 'b',
  'c', 'd', 'e', 'f'
];

const NUM_HEX_CHARS = 16;


function randomHexChar() {
  let randomIdx = Math.floor(Math.random() * NUM_HEX_CHARS);
  return HEX_CHARS[randomIdx];
}

function generateUUID() {
  const uuidSectionLengths = [8, 4, 4, 4, 12];

  let uuid = uuidSectionLengths.map(sectionLength => {
    let section = [];
    while (sectionLength > 0) {
      section.push(randomHexChar());
      sectionLength--;
    }
    return section.join('');
  });

  return uuid.join('-');
}

console.log(generateUUID());