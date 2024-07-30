/* Problem Statement:

Create an Employee class extending from a base class Person.  

Approach to the solution:

    Create a class Person with name and age as attributes  

    Add a constructor to initialize the values 

    Create a class Employee extending Person with additional attributes role and contact  

    The constructor of the Employee to accept the name, age, role and contact where name and age are initialized through a call to super to invoke the base class constructor  

    Add a method getDetails() to display all the details of Employee. 

Excepted output:  
The details of the Employee are:
Name: Beron
Age: 24
Role: Technology Analyst
Phone: 9001234567


*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, role, contact) {
    super(name, age);
    this.role = role;
    this.contact = contact;
  }

  getDetails() {
    document.write(`${this.name}, ${this.age}, ${this.role}, ${this.contact}`);
  }
}

let emp = new Employee("Beron", 24, "Technology Analyst", 9001234567);
