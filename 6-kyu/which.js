// DESCRIPTION:
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// // Example 1:
// let a1 = ["arp", "live", "strong"];

// let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

function inArray(array1, array2) {
  //...
  let arr = [];

  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array2[i].includes(array1[j])) {
        arr.push(array1[j]);
      }
    }
  }

  let unique = new Set(arr);
  return [...unique].sort();
}

// console.log(inArray(a1, a2));
console.log(inArray(a1, a2));

// Best practices

// function inArray(arr1, arr2) {
//   return arr1
//     .filter(function (needle) {
//       return arr2.some(function (haystack) {
//         return haystack.indexOf(needle) > -1;
//       });
//     })
//     .sort();
// }

// function inArray(a1, a2) {
//   var str = a2.join(" ");
//   return a1.filter((s) => str.indexOf(s) !== -1).sort();
// }
