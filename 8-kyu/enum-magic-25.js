// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  // Your code here
  let finalArr = [];

  if (n === 0 || !arr.length) return finalArr;

  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      finalArr.push(arr[i]);
    }
  } else if (n > arr.length) {
    for (let i = 0; i < arr.length; i++) {
      finalArr.push(arr[i]);
    }
  }

  return finalArr;
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3));

// Optimized Solution
// function take(arr, n) {
//   return arr.slice(0, n);
// }
