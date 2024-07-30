class Calculator {
  constructor(num1, num2) {
    // Constructor used for initializing the class instance

    /* Properties initialized in the constructor */
    this.num1 = num1;
    this.num2 = num2;
  }
  /* Methods of the class used for performing operations */
  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }
}
let calculator = new Calculator(300, 100); // Creating Calculator class object or instance
console.log("Add method returns" + calculator.add()); // Add method returns 400.
console.log("Subtract method returns" + calculator.subtract()); // Subtract method returns 200.
