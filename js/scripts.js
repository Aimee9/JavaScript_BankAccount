/**
 * JAVASCRIPT
 */

/* Log constructor */
function Log(accountAction, amount, accountBalance) {
 this.accountAction = accountAction;
 this.amount = amount;
 this.accountBalance = accountBalance;
}

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
  this.accountHistory = [new Log('open account', balance, balance)];
}

/* Deposit */
BankAccount.prototype.deposit = function(myAmount) {
  this.balance += myAmount;
  this.accountHistory.push(new Log('deposit', myAmount, this.balance));
}

/* Withdraw */
BankAccount.prototype.withdraw = function(myAmount) {
  if (myAmount <= this.balance) {
    this.balance -= myAmount;
    this.accountHistory.push(new Log('withdraw', myAmount, this.balance));
  } else {
    throw new BankAccountException('Not enough funds! Please try again.');
  }
}

/* New log display helper function */
function addNewLogToTable(currBankAccount) {
  var currIndex;
  if (currBankAccount.accountHistory.length === 0) {
    currIndex = 0;
  } else {
    currIndex = currBankAccount.accountHistory.length - 1;
  }
  var newLog = $('<tr>' +
                    '<td>' + currBankAccount.accountHistory[currIndex].accountAction + '</td>' +
                    '<td>' + currBankAccount.accountHistory[currIndex].amount + '</td>' +
                    '<td>' + currBankAccount.accountHistory[currIndex].accountBalance + '</td>' +
                  '</tr>');
  $('tbody').append(newLog);
}

/**
 * JQUERY
 */

$(document).ready(function() {
  var bankAccount;

  $('button#signupSubmit').click(function() {
    var inputtedUsername = $('input#username').val();
    var newBankAccount = new BankAccount(inputtedUsername, 0, 'checking');
    bankAccount = newBankAccount;
    addNewLogToTable(bankAccount);
    $('div#accountSignup').hide();
    $('span#table-title').text(inputtedUsername + "'s Account History");
    $('table#accountHistory').show();
  });

  $('button#actionSubmit').click(function() {
    var inputtedAction = $('select#actionDropdown').val();
    var inputtedAmount = parseInt($('input#amount').val());

    if (inputtedAction === "deposit") {
      bankAccount.deposit(inputtedAmount);
      addNewLogToTable(bankAccount);
    } else if (inputtedAction === "withdraw") {
      try {
        bankAccount.withdraw(inputtedAmount);
        addNewLogToTable(bankAccount);
      } catch (bae) {
        alert(bae.name + ": " + bae.message);
      }
    }
    $('div#myModal').modal('hide');
    $('input#amount').val('');
  });
});
