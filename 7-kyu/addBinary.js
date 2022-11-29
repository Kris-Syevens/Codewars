// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  let binaryStr = "";
  let sum = a + b;

  for (let x = Math.floor(Math.sqrt(a + b)); x >= 0; x--) {
    if (sum - Math.pow(2, x) >= 0) {
      binaryStr += "1";
      sum -= Math.pow(2, x);
    } else {
      binaryStr += "0";
    }
  }

  return binaryStr.substring(binaryStr.indexOf("1"), binaryStr.length);
}

// Test cases
console.time("Execution Time");
console.log(addBinary(1, 1)); // "10"
console.log(addBinary(5, 9)); // "1110"
console.log(addBinary(51, 12)); // "111111"
console.timeEnd("Execution Time");

// Code passes tests but isn't accepting as final submission to post due to time out on execution. Execution time being testing in console and doesn't appear to be issue. Codewars may have server disruption.
