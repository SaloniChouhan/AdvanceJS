class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit = (amt) => {
    if (amt > 0) {
      this.balance += amt;
      console.log(`Deposited INR: ${amt}. New balance is: INR${this.balance}`);
    } else {
      console.log(`Cannot deposit negative amount`);
    }
  };

  withdraw = (amt) => {
    if (amt > this.balance) {
      console.log(`Insufficient balance to withdraw`);
    } else {
      this.balance -= amt;
      console.log(`Withdrawn INR: ${amt}. New balance is: INR${this.balance}`);
    }
  };
}

const a = new BankAccount("123", "saloni");
a.deposit(200);
a.withdraw(150);
