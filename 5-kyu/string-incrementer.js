// DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// REGULAR EXPRESSIONS STRINGS

function incrementString(string) {
  if (string.length === 1) {
    if (string[0].search(/[0-9]/g) !== -1) {
      return `${parseInt(string[0]) + 1}`;
    } else return `${string[0]}1`;
  }

  if (string.search(/[0-9]/g) !== -1 && string.search(/[a-z]/g) === -1) {
    let finalNumStr = `${parseInt(string) + 1}`.split("");

    while (finalNumStr.length < string.length) {
      finalNumStr.unshift("0");
    }

    return `${finalNumStr.join("")}`;
  }

  if (string.search(/[0-9]/g) !== -1) {
    // There is a number in the string

    const numStr = string.slice(
      string.lastIndexOf(
        string.match(/[a-z]/gi)[string.match(/[a-z]/gi).length - 1]
      ) + 1,
      string.length
    );

    let finalNumStr = `${parseInt(numStr) + 1}`.split("");

    while (finalNumStr.length < numStr.length) {
      finalNumStr.unshift("0");
    }

    return `${string.slice(0, string.length - numStr.length)}${finalNumStr.join(
      ""
    )}`;

    //
  } else return `${string}1`;
}

console.log(incrementString("foobar000")); // foobar001
console.log(incrementString("foobar999")); // foobar1000
console.log(incrementString("foobar00999")); // foobar01000
console.log(incrementString("foo")); // foo1
console.log(incrementString("foobar001")); // foobar002
console.log(incrementString("foobar1")); // foobar2
console.log(incrementString("1")); // 2
console.log(incrementString("009")); // 010
console.log(incrementString("fo99obar99")); // fo99obar100
