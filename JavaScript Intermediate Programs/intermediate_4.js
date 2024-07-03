/*
Getters and Setters:
    Create a class called Rectangle that has the following properties:
    width
    height

    Add the following methods:

        A getter area that returns the area of the rectangle.
        A getter perimeter that returns the perimeter of the rectangle.
        A setter width that sets the width of the rectangle.
        A setter height that sets the height of the rectangle.
*/

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  get perimeter() {
    return 2 * (this._width + this._height);
  }

  set width(width) {
    this._width = width;
  }

  set height(height) {
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}

let rect = new Rectangle(5, 3);
console.log(rect.area);
console.log(rect.perimeter);

rect.width = 10;
rect.height = 5;
console.log(rect.area);
console.log(rect.perimeter);
