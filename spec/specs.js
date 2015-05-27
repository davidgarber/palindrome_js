describe('isPalindrome', function() {
  it("returns 'true' if a word is a palindrome", function() {
    expect(isPalindrome("mom")).to.equal(true);
  });

  it("returns 'false' if a word is not a palindrome", function() {
    expect(isPalindrome("mommy")).to.equal(false);
  });

  it("returns 'true' if a phrase is a palindrome", function() {
    expect(isPalindrome("madam i madam")).to.equal(true);
  });

  it("returns 'true' if an integer is a palindrome", function() {
    expect(isPalindrome(1002001)).to.equal(true);
  });

  it("returns 'false' if an integer is a palindrome", function() {
    expect(isPalindrome(8675309)).to.equal(false);
  });
});
