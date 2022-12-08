// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // Your code here
  let expandedStr = "";
  let zeroCount = String(num).length;

  String(num)
    .split("")
    .forEach((element, index, originalArr) => {
      let eachSet = "";
      if (element !== "0") {
        eachSet += element;
        for (let x = 1; x < zeroCount; x++) {
          eachSet += "0";
        }
        if (index !== originalArr.length - 1) {
          eachSet += " + ";
        }
        expandedStr += eachSet;
      }
      zeroCount--;
    });

  return String(num)[String(num).length - 1] === "0"
    ? expandedStr.slice(0, expandedStr.length - 3)
    : expandedStr;
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));

console.log(expandedForm(9000000));
console.log(expandedForm(83185660));

//Best practice

// const expandedForm = (n) =>
//   n
//     .toString()
//     .split("")
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i))
//     .filter((a) => a > 0)
//     .reverse()
//     .join(" + ");
