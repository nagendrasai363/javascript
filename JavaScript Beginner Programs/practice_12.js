/* Prime Number Checker
Write a program that checks if a given number is prime or not. */

function primeNumberCheck(customNum) {
  if (customNum === 0 || customNum === 1) {
    return `${customNum}: is not a prime number`;
  }

  for (i = 2; i < customNum / 2; i++) {
    if (customNum % i === 0) {
      return `${customNum} is not a prime number`;
    }
  }

  return `${customNum} is a prime number`;
}

let num = 1;

console.log(primeNumberCheck(num));
