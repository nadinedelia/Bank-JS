describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("is possible to deposit money", function() {
    account.deposit(amount);
    expect(account.balance).toEqual(amount);

  });
});
