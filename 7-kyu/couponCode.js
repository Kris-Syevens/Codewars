// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  let currentDateMili = new Date(
    `${currentDate.split(" ")[2]}-${
      months.indexOf(currentDate.split(" ")[0].toLowerCase()) + 1
    }-${currentDate.split(" ")[1].slice(0, 2)}`
  ).getTime();

  let expDateMili = new Date(
    `${expirationDate.split(" ")[2]}-${
      months.indexOf(expirationDate.split(" ")[0].toLowerCase()) + 1
    }-${expirationDate.split(" ")[1].slice(0, 2)}`
  ).getTime();

  return (
    (enteredCode === correctCode && currentDate === expirationDate) ||
    (enteredCode === correctCode && currentDateMili <= expDateMili)
  );
}
console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")); //true
console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")); //false
console.log(checkCoupon("123", "123", "October 5, 2014", "October 1, 2014")); //false
