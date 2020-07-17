describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should start with a balance of 0", function() {
    expect(account.balance).toEqual(0);
});

  it("is possible to deposit money", function() {
    account.deposit(10);
    expect(account.balance).toEqual(10);

  });
});
