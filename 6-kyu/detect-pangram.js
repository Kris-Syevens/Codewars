// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  //
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;

  for (let i = 0; i < alphabet.length; i++) {
    if (string.toLowerCase().includes(alphabet[i])) {
      count += 1;
    }
  }

  return count >= 26 ? true : false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")); // false

// Best Practices

// function isPangram(string) {
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
//     return string.indexOf(x) !== -1;
//   });
// }

// function isPangram(string) {
//   return "abcdefghijklmnopqrstuvwxyz"
//     .split("")
//     .every((x) => string.toLowerCase().includes(x));
// }
