// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// const binaryArrayToNumber = (arr) => {
//   let multiplier = arr.length - 1;
//   let decimal = 0;

//   arr.forEach((num) => {
//     num === 1 ? (decimal += 2 ** multiplier) : (decimal += 0);
//     multiplier--;
//   });

//   return decimal;
// };

const binaryArrayToNumber = (arr) => {
  return arr
    .map((num, i) => {
      return num === 1 ? 2 ** (arr.length - 1 - i) : 0;
    })
    .reduce((total, num) => total + num);
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6
