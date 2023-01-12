// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
  //coding and coding....
  return s
    .split("")
    .map((el, i, oA) => {
      if (el.toLowerCase().search(/(a|e|i|o|u)/g) === 0) {
        return "!";
      } else return el;
    })
    .join("");
}

console.log(replace("Hi!")); // "H!!"
console.log(replace("!Hi! Hi!")); // "!H!! H!!"
console.log(replace("aeiou")); // "!!!!!"
console.log(replace("ABCDE")); // "!BCD!"
