// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return string
    .split("")
    .map((el, i, oA) => {
      if (el === el.toUpperCase()) {
        return ` ${el}`;
      } else return el;
    })
    .join("");
}

console.log(solution("camelCaseSeparator")); // " camel Case Separator"
