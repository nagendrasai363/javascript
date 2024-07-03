/*
Inheritance
    Create a class called Student that inherits from the Person class.
    The Student class should have an additional property:
        Property: studentID
        Add a method getStudentInfo() that returns a string with the student's full name and ID.
*/

// Person Class
class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

// Student Class
class Student extends Person {
  constructor(firstName, lastName, age, studentID) {
    super(firstName, lastName, age);
    this._studentID = studentID;
  }

  getStudentInfo() {
    return `${this.fullName}, ID: ${this._studentID}`;
  }
}

// Create a Student object
let sai = new Student("Sai", "Nag", 25, 123456);
console.log(sai);
console.log(sai.getStudentInfo());
