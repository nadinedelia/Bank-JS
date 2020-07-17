describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("is possible to deposit money", function() {
    account.deposit(10);
    expect(account.balance).toEqual(10);

  });
});
