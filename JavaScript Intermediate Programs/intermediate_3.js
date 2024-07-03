/*
Create a class called MathUtil with the following static methods:
    add(a, b) - returns the sum of a and b.
    subtract(a, b) - returns the difference between a and b.
*/

//MathUtil Class
class MathUtil {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

//Create Object
let values = new MathUtil();
console.log(values);
console.log(values.add(5, 5));
