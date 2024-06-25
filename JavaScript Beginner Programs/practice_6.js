/* Palindrome Checker
Write a program that checks if a given string is a palindrome
(reads the same forwards and backwards). */

//EX: level -> reverse also level

palindromeChecker = (str) => {
  let reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if (str === reversedStr) {
    console.log("Input string is a palindrome");
  } else {
    console.log("Input string is not a palindrome");
  }
};

palindromeChecker("level");
