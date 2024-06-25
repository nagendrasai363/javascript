/* Count Vowels in a String
Write a program that counts the number of vowels in a given string. */

//VOWELS: a, e, i, o, u
//EX: apple - 2 (a, e)

const vowelCount = (inputStr) => {
  let currentCount = 0;

  for (let i = 0; i < inputStr.length; i++) {
    if (
      inputStr[i] === "a" ||
      inputStr[i] === "A" ||
      inputStr[i] === "e" ||
      inputStr[i] === "E" ||
      inputStr[i] === "i" ||
      inputStr[i] === "I" ||
      inputStr[i] === "o" ||
      inputStr[i] === "O" ||
      inputStr[i] === "u" ||
      inputStr[i] === "U"
    ) {
      console.log(`${inputStr[i]} is Vowel`);
      currentCount += 1;
    }
  }
  return currentCount;
};

console.log(vowelCount("Apple"));
