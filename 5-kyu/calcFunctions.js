// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(mathOpFN) {
  const selfValue = 0;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

function one(mathOpFN) {
  const selfValue = 1;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

function two(mathOpFN) {
  const selfValue = 2;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

function three(mathOpFN) {
  const selfValue = 3;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

function four(mathOpFN) {
  const selfValue = 4;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

function five(mathOpFN) {
  const selfValue = 5;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

function six(mathOpFN) {
  const selfValue = 6;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

function seven(mathOpFN) {
  const selfValue = 7;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

function eight(mathOpFN) {
  const selfValue = 8;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

function nine(mathOpFN) {
  const selfValue = 9;

  if (mathOpFN !== undefined) {
    const operator = mathOpFN.operator;
    const innerValue = mathOpFN.innerValue;
    switch (operator) {
      case "+":
        return Math.trunc(selfValue + innerValue);
        break;
      case "-":
        return Math.trunc(selfValue - innerValue);
        break;
      case "*":
        return Math.trunc(selfValue * innerValue);
        break;
      case "/":
        return Math.trunc(selfValue / innerValue);
        break;
    }
  } else return selfValue;
}

/// OPERATOR FUNCTIONS

function plus(n) {
  return {
    operator: "+",
    innerValue: n,
  };
}

function minus(n) {
  return {
    operator: "-",
    innerValue: n,
  };
}

function times(n) {
  return {
    operator: "*",
    innerValue: n,
  };
}

function dividedBy(n) {
  return {
    operator: "/",
    innerValue: n,
  };
}

console.log(one(plus(two()))); // 3
// console.log(four(dividedBy(two()))); // 2
