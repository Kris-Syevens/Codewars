// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

function comp(array1, array2) {
  //your code here
  let isValid = true;

  if (array1 === null || array2 === null) {
    return (isValid = false);
  } else if (array1.length === 0 && array2.length === 0) {
    return isValid;
  } else if (array1.length > 0 && array2.length > 0) {
    for (let i = 0; i < array2.length; i++) {
      let hasMatch = false;
      console.log(`Loop ${i + 1} isValid: ${isValid}`);
      for (let j = 0; j < array1.length; j++) {
        console.log(
          `Array2: ${Math.sqrt(array2[i])} vs Array1: ${array1[j]} Match?: ${
            Math.sqrt(array2[i]) === array1[j]
          }`
        );
        if (Math.sqrt(array2[i]) === array1[j]) {
          hasMatch = true;
        }
      }
      if (hasMatch) {
        continue;
      } else {
        isValid = false;
        break;
      }
    }

    if (
      array1.reduce((total, num) => total + num) ===
      array2.map((int) => Math.sqrt(int)).reduce((total, num) => total + num)
    ) {
      isValid = true;
    } else isValid = false;

    return isValid;
  } else if ((array1.length === 0) & (array2.length === 0)) {
    isValid = true;
  } else return false;
}

// let a = [121, 144, 19, 161, 19, 144, 19, 11];
// let b = [
//   11 * 11,
//   121 * 121,
//   144 * 144,
//   19 * 19,
//   161 * 161,
//   19 * 19,
//   144 * 144,
//   19 * 19,
// ];

// a = [121, 144, 19, 161, 19, 144, 19, 11];
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// a = [121, 144, 19, 161, 19, 144, 19, 11];
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

// let a = [
//   0, 10, 8, 9, 9, 7, 5, 0, 6, 8, 7, 3, 8, 0, 1, 4, 6, 8, 9, 3, 8, 4, 7, 10, 2,
// ];
// let b = [
//   4, 0, 64, 81, 9, 36, 49, 100, 49, 25, 9, 64, 1, 0, 100, 64, 16, 0, 64, 81, 36,
//   81, 49, 16, 64,
// ];

// let a = [];
// let b = null;
// let c = null;
// let d = [];
console.log(comp(a, b));
console.log(comp(c, d));

// Best practice

// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }
