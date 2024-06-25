/* Random Number Generator
Write a program that generates a random number between a given range. */

function randomNumberGenerator(min, max) {
  let randomNumber = Math.random();

  let result = Math.floor(randomNumber * (max - min + 1)) + min;
  return result;
}

let minNumber = 550;
let maxNumber = 570;

let num = randomNumberGenerator(minNumber, maxNumber);
console.log(num);
