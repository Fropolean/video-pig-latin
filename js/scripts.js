var pigLatin = function(englishWord) {
  var splitAt = indexofFirstVowel(englishWord);
  return englishWord.slice(splitAt) + englishWord.slice(0, splitAt) + "ay";
};

var indexofFirstVowel = function(word) { //tells us where the index of the first vowel is
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = word.split("");

  for (var i = 0; i < letters.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (letters[i] === vowels[j]) {
        return i;
      }
    }
  }
};
