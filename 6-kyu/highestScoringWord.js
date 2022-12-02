// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  //code
  return x
    .split(" ")
    .map((word, index, originalArray) => {
      let alpha = "abcdefghijklmnopqrstuvwxyz";
      let scoresArray = originalArray.map((el) => {
        let wordScore = 0;

        el.split("")
          .map((charEl) => charEl)
          .forEach((char) => {
            wordScore +=
              alpha
                .split("")
                .map((charAlpha) => charAlpha)
                .indexOf(char) + 1;
          });

        return wordScore;
      });

      if (
        scoresArray[index] ===
        scoresArray.sort(function (a, b) {
          return b - a;
        })[0]
      ) {
        return word;
      }

      //
    })
    .join(" ")
    .trim()
    .split(" ")[0];
}

console.log(high("man i need a taxi up to ubud")); // 'taxi'
console.log(high("what time are we climbing up the volcano")); // 'volcano'
console.log(high("take me to semynak")); // 'semynak'
console.log(high("aa b")); // 'aa'
console.log(high("b aa")); // 'b'
console.log(high("bb d")); // 'bb'
console.log(high("d bb")); // 'd'
console.log(high("aaa b")); // 'aaa'

// Voted Best Practice

// function high(s) {
//   let as = s
//     .split(" ")
//     .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
//   return s.split(" ")[as.indexOf(Math.max(...as))];
// }
