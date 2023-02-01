// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array
function countSmileys(arr) {
  //
  let finalCount = 0;
  //   const pattern = /(:|;|-|~|[)]|[D])/g;
  const validCharObj = {
    ":": 1,
    ";": 1,
    "-": 2,
    "~": 2,
    ")": 3,
    D: 3,
  };

  arr.forEach((el, i, oA) => {
    let count = 0;
    el.split("").forEach((el) => {
      if (validCharObj[el]) {
        count += validCharObj[el];
      }
    });
    //
    if (el.length == 2) {
      if (count === 4) {
        finalCount += 1;
      }
    } else if (el.length === 3) {
      if (count === 6) {
        finalCount += 1;
      }
    }
  });

  return finalCount;
}

console.log(countSmileys([])); // 0
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); // 4
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); // 2
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // 1
