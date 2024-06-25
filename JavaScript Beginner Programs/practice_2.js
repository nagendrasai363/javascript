/* Basic Arithmetic Operations:
Create a program that performs and logs the results of 
addition, subtraction, multiplication, and division on two numbers. */

const result = (val1, val2, action) => {
  if (typeof val1 === "number" && typeof val2 === "number") {
    switch (action) {
      case "+":
        return val1 + val2;
        break;
      case "-":
        return val1 - val2;
        break;
      case "*":
        return val1 * val2;
        break;
      case "/":
        return val1 / val2;
        break;
      default:
        console.log("Enter a valid operation of [+, -, *, /]");
    }
  }
};

console.log(result(2, 2, "*"));
