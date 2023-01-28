// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12
// FUNDAMENTALSMATHEMATICS

const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

console.log(quarterOf(1)); // 1
console.log(quarterOf(2)); // 1
console.log(quarterOf(3)); // 1
console.log(quarterOf(4)); // 2
console.log(quarterOf(5)); // 2
console.log(quarterOf(6)); // 2
console.log(quarterOf(7)); // 3
console.log(quarterOf(8)); // 3
console.log(quarterOf(9)); // 3
console.log(quarterOf(10)); // 4
console.log(quarterOf(11)); // 4
console.log(quarterOf(12)); // 4
