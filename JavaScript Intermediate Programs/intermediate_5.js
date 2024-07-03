/*
Advanced Inheritance:
    Create a class called Animal with the following properties and methods:
        Properties: name, age
        Method: makeSound() which returns a string "Some generic sound".

    Create a class called Dog that inherits from Animal and has the following additional property and method:
        Property: breed
        Method: makeSound() which returns "Woof!".
        Method: getInfo() that returns a string with the dog's name, age, and breed.
*/

//Animal Class
class Animal {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  makeSound() {
    return "Some generic sound";
  }
}

//Dog Class
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this._breed = breed;
  }

  makeSound() {
    return "Woof!";
  }

  getInfo() {
    return `Name: ${this._name} Age: ${this._age} Breed: ${this._breed}`;
  }
}

//Create object
let puppy = new Dog("Puppy", 12, "labour");
console.log(puppy);
console.log(puppy.makeSound());
console.log(puppy.getInfo());
