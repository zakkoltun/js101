/*

Understand the problem
  
  Inputs:
    - 1 array and 1 object
      - array:
        - full name when combined with spaces
        - two or more elements
      - object:
        - two keys (with appropriate values): 'title' and 'occupation'
  Output:
    Return greeting
      Must include full name (from array) and mention title (from object)
*/

function greetings(nameArray, titleObject) {
  let fullName = nameArray.join(' ');
  let fullTitle = titleObject.title + ' ' + titleObject.occupation;

  return `Hello, ${ fullName }! Nice to have a ${ fullTitle } around.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
