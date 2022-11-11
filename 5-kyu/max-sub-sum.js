// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function (arr) {
  // if array contains all neg ints, return 0
  let allNeg = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      continue;
    } else {
      allNeg = false;
    }
  }
  if (allNeg === true || arr.length === 0) return 0;
  let i = 1;
  do {} while (i < arr.length);
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //  should be 6: [4, -1, 2, 1]
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])); //  should be 0
console.log(maxSequence([])); //  should be 0
