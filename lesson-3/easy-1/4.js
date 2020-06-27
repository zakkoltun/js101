let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function capFirstLowerRest(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capFirstLowerRest(munstersDescription));
