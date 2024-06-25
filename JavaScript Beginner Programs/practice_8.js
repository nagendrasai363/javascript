/* Array Sum
Write a program that takes an array of numbers and
returns the sum of all the numbers. */

let numArray = new Array();
numArray = [1, 2, 3, 4, 5, 6];

let sumOfArray = (customArray) => {
  let result = 0;

  for (let i = 0; i < customArray.length; i++) {
    result += customArray[i];
  }
  return result;
};

console.log(sumOfArray(numArray));
