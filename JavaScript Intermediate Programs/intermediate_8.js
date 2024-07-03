/*
 Chaining Methods

Create a class called Car with the following properties and methods:

    Property: brand
    Property: model
    Property: year
    Method: setBrand(brand) - sets the brand and returns this.
    Method: setModel(model) - sets the model and returns this.
    Method: setYear(year) - sets the year and returns this.
    Method: getCarInfo() - returns a string with the car's brand, model, and year.

*/

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  getCarInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  }
}

const car = new Car("Toyota", "Camry", 2021);
car.setBrand("Honda").setModel("Accord").setYear(2022);
console.log(car.getCarInfo());
