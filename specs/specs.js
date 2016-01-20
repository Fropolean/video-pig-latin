describe ("pigLatin", function() {
  it("is false for words that start with vowels", function(){
    expect(pigLatin("alphabet")).to.equal(false);
  });
});
