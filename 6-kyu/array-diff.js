// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let arr = [];
  if (a.length === 0 || b.length === 0) {
    return a;
  }

  for (let j = 0; j < a.length; j++) {
    let matchFound = false;
    for (let i = 0; i < b.length; i++) {
      if (a[j] === b[i]) {
        if (matchFound === true) {
          continue;
        } else matchFound = true;
      }
    }

    if (!matchFound) arr.push(a[j]);
  }

  return arr;
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));

// Best practice

// function array_diff(a, b) {
//   return a.filter((e) => !b.includes(e));
// }
