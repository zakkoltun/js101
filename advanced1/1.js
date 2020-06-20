function madlibs(template) {
  let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  let adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];

  let adjPattern = /\[adj\]/;
  let nounPattern = /\[noun\]/;
  let verbPattern = /\[verb\]/;
  let advPattern = /\[adv\]/;

  let madLibbed = template;

  madLibbed = replaceFromList(madLibbed, adjPattern, adjectives);
  madLibbed = replaceFromList(madLibbed, nounPattern, nouns);
  madLibbed = replaceFromList(madLibbed, verbPattern, verbs);
  madLibbed = replaceFromList(madLibbed, advPattern, adverbs);

  return madLibbed;
}

function replaceFromList(string, pattern, list) {
  while (pattern.test(string)) {
    string = string.replace(pattern, randomFromList(list));
  }

  return string;
}


function randomFromList(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


let template1 = 
  'The [adj] brown [noun] [adv] [verb] the [adj] yellow [noun], ' +
  'who [adv] [verb] his [noun] and looks around.';

let template2 = "The [noun] [verb] the [noun]'s [noun]";

console.log(madlibs(template1));
console.log(madlibs(template2));
