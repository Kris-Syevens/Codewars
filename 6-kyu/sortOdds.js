// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  // Return a sorted array.

  let arrSortedOdds = [...array]
    .filter((el) => {
      return el % 2 !== 0;
    })
    .sort((a, b) => a - b);

  return array.map((el, i, oA) => {
    let nextOddUp;
    if (el % 2 === 0) {
      return el;
    } else {
      nextOddUp = arrSortedOdds[0];
      arrSortedOdds.shift();
      return nextOddUp;
    }
  });
}

console.log(sortArray([7, 1])); // [1,7]
console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
