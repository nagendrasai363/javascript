/* Sort an Array
Write a program that sorts an array of numbers in ascending order. */

function sortedArray(customArray) {
  let sortArray = [];

  for (let i = 0; i < customArray.length; i++) {
    for (let j = 1; j < customArray.length; j++) {
      if (customArray[i] < customArray[j]) {
        sortArray = customArray[i];
      }
    }
  }
}

let array = [1, 8, 7, 3, 2, 0, 5];

console.log(sortedArray(array));
