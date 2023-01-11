// DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = function (word) {
  // Write your code here
  let arr = [];
  word.split("").forEach((el, i, oA) => {
    if (el === el.toUpperCase()) {
      arr.push(i);
    }
  });

  return arr;
};

console.log(capitals("CodEWaRs")); // [0,3,4,6]
