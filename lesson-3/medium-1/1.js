let artText = 'The Flintstones Rock!';

for (let indent = 0; indent < 10; indent += 1) {
  console.log(artText.padStart(artText.length + indent, ' '))
}
