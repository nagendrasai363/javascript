/*
Basic Class Creation
    Create a class called Person that has the following properties and methods:
        Properties: firstName, lastName, age
        Method: fullName() which returns the full name of the person. 
*/

// Person Class
class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get fullName() {
    return this._firstName + this._lastName;
  }
}

// Create object for Person class
let sai = new Person("Sai", "Nag", 25);
console.log(sai);
console.log("Full Name: " + sai.fullName);
