/* Even or Odd:
Write a program to check if a given number is even or odd. */

const evenOrOdd = (val) => {
  if (typeof val === "number") {
    return val % 2 === 0 ? "Even Number" : "Odd Number";
  } else {
    return "Enter a valid number";
  }
};

console.log(evenOrOdd(2));
