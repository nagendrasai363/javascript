/*
Abstract Classes (Using ES6 syntax)

Create an abstract class called Shape with the following properties and methods:

    Property: name
    Abstract Method: calculateArea() - should be overridden by subclasses to calculate the area of the shape.

Create two subclasses Square and Triangle that inherit from Shape and implement the calculateArea method.

*/

// Abstract class Shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  // Abstract method, to be overridden by subclasses
  calculateArea() {
    throw new Error("Method calculateArea() must be implemented");
  }
}

// Subclass Square inheriting from Shape
class Square extends Shape {
  constructor(sideLength) {
    super("Square");
    this.sideLength = sideLength;
  }

  // Override calculateArea method
  calculateArea() {
    return this.sideLength ** 2;
  }
}

// Subclass Triangle inheriting from Shape
class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle");
    this.base = base;
    this.height = height;
  }

  // Override calculateArea method
  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

// Usage example:
const square = new Square(5);
console.log(
  `Area of ${square.name} with side length ${
    square.sideLength
  }: ${square.calculateArea()}`
);

const triangle = new Triangle(4, 3);
console.log(
  `Area of ${triangle.name} with base ${triangle.base} and height ${
    triangle.height
  }: ${triangle.calculateArea()}`
);
