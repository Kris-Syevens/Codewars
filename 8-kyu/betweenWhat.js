// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  // your code here

  let arr = [];

  for (let x = a; x <= b; x++) {
    arr.push(x);
  }

  return arr;
}

console.log(between(1, 4));
console.log(between(7, 14));
console.log(between(10, 40));
