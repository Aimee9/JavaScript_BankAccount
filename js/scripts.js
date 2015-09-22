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
  this.accountHistory = [{'action': 'open account', 'amount': balance, 'balance': this.balance}];
}

/* Deposit */
BankAccount.prototype.deposit = function(myAmount) {
  this.balance += myAmount;
  this.accountHistory.push({'action': 'deposit', 'amount': myAmount, 'balance': this.balance});
}

/* Withdraw */
BankAccount.prototype.withdraw = function(myAmount) {
  if (myAmount <= this.balance) {
    this.balance -= myAmount;
    this.accountHistory.push({'action': 'withdraw', 'amount': myAmount, 'balance': this.balance});
  } else {
    throw new BankAccountException('Not enough funds! Please try again.');
  }
}
