/*
 Private Properties (Using Symbols or WeakMaps)

Create a class called BankAccount with the following properties and methods:

    Properties: accountNumber, accountHolder
    Private Property: balance
    Method: deposit(amount) - increases the balance by the specified amount.
    Method: withdraw(amount) - decreases the balance by the specified amount if there are sufficient funds.
    Method: getBalance() - returns the current balance.

*/

class BankAccount {
  constructor(accountNumber, accountHolder, _balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this._balance = _balance;
  }

  deposit(amount) {
    this._balance += amount;
    return this._balance;
  }

  withdraw(amount) {
    if (amount < this._balance) {
      this._balance -= amount;
      return this._balance;
    }
    return "Insufficient Funds";
  }

  get getBalance() {
    return this._balance;
  }
}

let sai = new BankAccount(123, "Sai", 10000);
console.log(sai);
console.log(sai.deposit(500));
console.log(sai.getBalance);
console.log(sai.withdraw(100));
