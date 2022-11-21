// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let xCount = 0;
  let oCount = 0;

  str
    .toLowerCase()
    .split("")
    .forEach((el) => {
      if (el === "o") {
        oCount += 1;
      } else if (el === "x") {
        xCount += 1;
      }
    });

  return xCount === oCount ? true : false;
}

// console.log(XO("xo")); //true
// console.log(XO("xxOo")); //true
// console.log(XO("xxxm")); //false
// console.log(XO("Oo")); //false
// console.log(XO("ooom")); //false

// Best practice

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
