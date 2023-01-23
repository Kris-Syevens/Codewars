// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
  //
  if (arr.length === 0) return 0;
  if (
    arr.filter((x) => x >= 0).length === 0 ||
    arr.filter((x) => x >= 0).reduce((a, b) => a + b) <= 0
  )
    return 0;

  let highestSubArrSum = 0;

  arr.forEach((el, i, oA) => {
    let endSliceIndex = i + 1;
    let arrSlice = oA.slice(i, endSliceIndex);
    while (arrSlice.length < oA.length - i) {
      arrSlice = oA.slice(i, endSliceIndex++);
      if (arrSlice.reduce((a, b) => a + b) > highestSubArrSum) {
        highestSubArrSum = arrSlice.reduce((a, b) => a + b);
      }
    }
  });

  return highestSubArrSum;
}

// TEST CASES //
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //  should be 6: [4, -1, 2, 1]
console.log(
  maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
); //  should 155
console.log(
  maxSequence([
    32, -32, 15, -28, -13, 42, -35, 28, 7, -25, -1, 47, -15, 22, 11, 32, 19, 7,
    37, -33, -10, 30, 23, -43, 11, 9, -14, -41, -33, -48, -7, -1, 24, 2, 47,
    -37, 41, -16, 42, -18, 45, 40, -39, -20, -17, 1, 12, -48, 13, -43, 1, 11,
    -48, -2, 47, -27, 16, 19, -16, -49, -20, -34, -27, 17,
  ])
); //  should be 189
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])); //  should be 0
console.log(maxSequence([])); //  should be 0

// OPTIMAL SOLUTION

// var maxSequence = function (arr) {
//   var min = 0,
//     ans = 0,
//     i,
//     sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// };
