const { add, divide, multiply } = require("lodash");

/**
 * Lets build a simple math module
 */

function doCalculations(num1, num2) {
  const sum = add(num1, num2);
  const product = multiply(num1, num2);
  const quotient = divide(num1, num2);

  console.log(sum);
  console.log(product);
  console.log(quotient);

  console.log("Done");
}

doCalculations(10, 2);
