/* Find the Largest Number in an Array
Write a program that finds the largest number in a given array. */

const numArray = [700, 500, 50, 900];

const largestNum = (customArray) => {
  let currentNum = customArray[0];

  for (i = 1; i < customArray.length; i++) {
    if (customArray[i] > currentNum) {
      currentNum = customArray[i];
    }
  }
  return currentNum;
};

console.log(largestNum(numArray));
