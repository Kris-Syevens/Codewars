// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const humanYearsCatYearsDogYears = (humanYears) => {
  const arr = [humanYears, 0, 0];

  if (humanYears < 2) {
    arr[1] = 15;
    arr[2] = 15;
  } else if (humanYears < 3) {
    arr[1] = 24;
    arr[2] = 24;
  } else {
    arr[1] = 24 + (humanYears - 2) * 4;
    arr[2] = 24 + (humanYears - 2) * 5;
  }

  return arr;
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
