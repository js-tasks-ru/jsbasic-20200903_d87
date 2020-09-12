/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
  let currentFactorial = 1;
  if (n === 0) {
    return 1;
  }
  else {
    for (let index = 1 ; index <= n ; index++) {
      currentFactorial *= index;
    }
  }
  return  currentFactorial ;
}

