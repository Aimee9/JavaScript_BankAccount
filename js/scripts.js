/**
 * JAVASCRIPT
 */

/* Bank account exception */
function BankAccountException(message) {
  this.message = message;
  this.name = 'BankAccountException';
};

/* Bank account constructor */
function BankAccount(username, balance, accountType) {
  this.username = username;
  this.balance = balance;
  this.accountType = accountType;
}

/* Deposit */
BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}

/* Withdraw */
BankAccount.prototype.withdraw = function(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  } else {
    throw new BankAccountException('Not enough funds! Please try again.');
  }
}
