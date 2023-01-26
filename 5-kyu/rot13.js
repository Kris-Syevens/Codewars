// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  return message
    .split("")
    .map((el) => {
      //
      if (el.match(/[a-zA-Z]/g)) {
        if (el === el.toUpperCase()) {
          //
          if (el.charCodeAt(0) + 13 > 90) {
            return String.fromCharCode(12 - (90 - el.charCodeAt(0)) + 65);
          } else return String.fromCharCode(el.charCodeAt(0) + 13);
        } else {
          //
          if (el.charCodeAt(0) + 13 > 122) {
            return String.fromCharCode(12 - (122 - el.charCodeAt(0)) + 97);
          } else return String.fromCharCode(el.charCodeAt(0) + 13);
        }
      } else return el;
      //
    })
    .join("");
}

console.log(rot13("test")); // ["test", "grfg"]
console.log(rot13("Test")); // ["Test", "Grfg"]

// console.log("a".charCodeAt(0)); // 97
// console.log("z".charCodeAt(0)); // 122
// console.log("A".charCodeAt(0)); // 65
// console.log("Z".charCodeAt(0)); // 90

console.log("t".charCodeAt(0)); // 116
console.log("e".charCodeAt(0)); // 101
console.log("s".charCodeAt(0)); // 115
console.log("t".charCodeAt(0)); // 116

console.log("g".charCodeAt(0)); // 103
console.log("r".charCodeAt(0)); // 114
console.log("f".charCodeAt(0)); // 102
console.log("g".charCodeAt(0)); // 103

// console.log("G".charCodeAt(0)); // 71
// console.log("r".charCodeAt(0)); // 114
// console.log("f".charCodeAt(0)); // 102
// console.log("g".charCodeAt(0)); // 103
