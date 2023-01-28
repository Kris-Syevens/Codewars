// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"

// FUNDAMENTALSMATHEMATICSALGORITHMS

function race(v1, v2, g) {
  if (v1 > v2) return null;

  const time = (g / (v2 - v1)) * 60 * 60;

  let hours = Math.floor(time / 3600);
  let mins = Math.trunc((time - hours * 60 * 60) / 60);
  let seconds = Math.floor(time - (hours * 60 * 60 + mins * 60));

  return [hours, mins, seconds];
}

console.log(race(720, 850, 70)); // [0, 32, 18]  1938 seconds.
console.log(race(80, 91, 37)); // [3, 21, 49] 12109 seconds.
console.log(race(80, 100, 40)); // [2, 0, 0]  seconds.
console.log(race(820, 850, 550));
console.log(race(422, 458, 64));
console.log(race(236, 686, 131));
console.log(race(748, 787, 104));
console.log(race(687, 762, 145));
