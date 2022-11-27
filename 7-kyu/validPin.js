// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  if (pin.length === 0) {
    return false;
  } else if (pin.length === 4 || pin.length === 6) {
    if (pin.search(/\D/gi) === -1) {
      return true;
    } else return false;
  } else if (
    pin.length < 4 ||
    (pin.length > 4 && pin.length < 6) ||
    pin.length > 6
  ) {
    return false;
  } else if (pin.search(/\D/gi) >= 0) {
    return false;
  }
}

console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("12a4")); // false
console.log(validatePIN("1")); // false
console.log(validatePIN("")); // false

// Best practice:

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }
