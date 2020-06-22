function isBlockWord(word) {
  const blockPairs = {
    a: 'n', b: 'o', c: 'p',
    d: 'q', e: 'r', f: 's',
    g: 't', h: 'u', i: 'v', 
    j: 'w', k: 'x', l: 'y',
    m: 'z', n: 'a', o: 'b',
    p: 'c', q: 'd', r: 'e',
    s: 'f', t: 'g', u: 'h',
    v: 'i', w: 'j', x: 'k',
    y: 'l', z: 'm'
  }

  let letters = word.split('').map(l => l.toLowerCase());

  for (let i = 0; i < letters.length - 1; i += 1) {
    let letter = letters[i];
    let restOfWord = letters.slice(i + 1);

    if (restOfWord.includes(letter) || 
        restOfWord.includes(blockPairs[letter])) {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
console.log(isBlockWord('ARE'));
console.log(isBlockWord('EAR'));
