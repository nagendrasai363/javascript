/*
Create a class called Circle with the following properties and methods:
    Property: radius
    Static Method: calculateCircumference(radius) which returns the circumference of a circle given its radius.
    Method: getCircumference() that uses the static method calculateCircumference to return the circumference of the circle instance.
*/

const PI = Math.PI;
console.log(PI);

//Circle Class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  static calculateCircumference(radius) {
    return 2 * PI * radius;
  }

  getCircumference() {
    return Circle.calculateCircumference(this.radius);
  }
}

let myObject = new Circle(10);
console.log(myObject);
console.log(myObject.getCircumference());
