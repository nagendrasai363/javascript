/* Factorial Calculation:
Create a program that calculates the factorial of a given number. */

//Iterative Method
//EX: 5! = 5 * 4 * 3 * 2 * 1

factorial = (num) => {
  let result = 1;
  if (result === num) {
    return 1;
  } else {
    for (let i = 1; i <= num; i++) {
      result *= i;
      console.log(result);
    }
    return result;
  }
};

console.log(factorial(5));

//Recursion Method
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  //Recursive Case: n! = n * (n-1)!
  return num * calculateFactorial(num - 1);
}

let factorial = calculateFactorial(5);
