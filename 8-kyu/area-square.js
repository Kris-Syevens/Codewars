// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A) {
  //
  let radius = (A * 4) / (2 * Math.PI);
  return Number((radius ** 2).toFixed(2));
}

console.log(squareArea(2)); //1.62
console.log(squareArea(0)); //0.00
console.log(squareArea(14.05)); //80
