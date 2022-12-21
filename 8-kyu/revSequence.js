// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = (n) => {
//   let arr = [];

//   for (let x = n; n > 0; n--) {
//     arr.push(n);
//   }

//   return arr;
// };

const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((el, i, oA) => {
      el = n - i;
      return el;
    });
};

console.log(reverseSeq(5));
console.log(reverseSeq(10));
// console.log(reverseSeq(50));
