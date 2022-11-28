// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("")
    ? true
    : false;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("kris")); // false

// Best practice implemented.
