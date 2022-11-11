// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  // The function code should be here
  let obj = {};
  let unique = [...new Set(string.split(""))];
  console.log(unique);
  for (let i = 0; i < unique.length; i++) {
    let count = 0;
    for (let x = 0; x < string.length; x++) {
      if (unique[i] === string[x]) {
        count += 1;
      }
    }
    obj[unique[i]] = count;
  }

  return obj;
}

console.log(count("aba"));
// console.log(count(""));

//Best practices

// function count(string) {
//   var count = {};
//   string.split("").forEach(function (s) {
//     count[s] ? count[s]++ : (count[s] = 1);
//   });
//   return count;
// }

// function count(string) {
//   return string.split("").reduce(function (counts, char) {
//     counts[char] = (counts[char] || 0) + 1;
//     return counts;
//   }, {});
// }
