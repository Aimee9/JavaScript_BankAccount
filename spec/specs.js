describe('BankAccount', function() {
  it("will create a bank account object", function() {
    var testAccount = new BankAccount("epicodus", 200, "checking");
    var expectedHistory = [{'action': 'open account', 'amount': 200, 'balance': 200}];
    expect(testAccount.username).to.equal("epicodus");
    expect(testAccount.balance).to.equal(200);
    expect(testAccount.accountType).to.equal("checking");
    expect(testAccount.accountHistory).to.eql(expectedHistory);
  });
});

describe('deposit', function() {
  it("will add an amount of money to a user's account", function() {
    var testAccount = new BankAccount("epicodus", 200, "checking");
    testAccount.deposit(100);
    expect(testAccount.balance).to.equal(300);
  });
});

describe('withdraw', function() {
  it("will subtract an amount of money to a user's account", function() {
    var testAccount = new BankAccount("epicodus", 200, "checking");
    testAccount.withdraw(100);
    expect(testAccount.balance).to.equal(100);
  });

  it("will not subtract an amount of money to a user's account if amount is greater than existing funds", function() {
    var testAccount = new BankAccount("epicodus", 200, "checking");
    expect(function() { testAccount.withdraw(300); }).to.throw(new BankAccountException('Not enough funds! Please try again.'));
  });
});
