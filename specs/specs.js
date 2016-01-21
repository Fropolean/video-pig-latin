describe ("pigLatin", function() {
  it("add 'ay' to the end of a word that starts with a vowel", function(){
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("adds 'ay' to the end of a word that starts with any vowel", function() {
    expect(pigLatin("english")).to.equal("englishay");
  })

  it("takes a single consonant at the beginning of a word and moves it to the end", function() {
    expect(pigLatin("cat")).to.equal("atcay");
  });

  it("takes two consonants at the beginning of a word and moves then to the end", function() {
    expect(pigLatin("cricket")).to.equal("icketcray");
  });
});


describe("hasConsonantAt", function() {
  it("returns true if a word has a consonant in the specified spot", function() {
    expect(hasConsonantAt("peanut", 1)).to.equal(true);
  });

  it("returns false if a word does not have a consonant in the specified spot", function() {
    expect(hasConsonantAt("peanut", 1)).to.equal(false);
  });
});
