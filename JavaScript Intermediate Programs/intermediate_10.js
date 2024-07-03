/*
Encapsulation and Data Validation

Create a class called User with the following properties and methods:

    Properties: username, password
    Setter: setPassword(password) - sets the password if it meets the following criteria:
    at least 8 characters long, contains at least one number and one uppercase letter.
    Getter: getUsername() - returns the username.

*/

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  set setPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordRegex.test(password)) {
      this.password = password;
    }
  }

  get getUsername() {
    return this.username;
  }
}

let sai = new User("Sai", "Sai@1");
console.log(sai);
sai.setPassword = "Nag@23241";
console.log(sai.getUsername);
console.log(sai);
