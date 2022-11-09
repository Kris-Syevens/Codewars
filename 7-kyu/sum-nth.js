// // DESCRIPTION:

// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  // Happy Coding ^_^
  let sum = 1;
  let nth = 1;
  if (n === 1 || n === 0) {
    return `${n.toFixed(2)}`;
  } else {
    for (let i = 0; i < n - 1; i++) {
      nth += 3;
      sum += 1 / nth;
    }
    return `${sum.toFixed(2)}`;
  }
}

console.log(SeriesSum(1)); // 1.00

// Best practices

// function SeriesSum(n) {
//   for (var s = 0, i = 0; i < n; i++) {
//     s += 1 / (1 + i * 3);
//   }

//   return s.toFixed(2);
// }
