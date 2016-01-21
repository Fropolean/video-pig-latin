var pigLatin = function(englishWord) {
  if (hasVowelAt(englishWord, 0)) {
    var translatedWord = englishWord;
  } else if (!hasVowelAt(englishWord, 1)) {
    var translatedWord = englishWord.slice(1) + englishWord.slice(0, 1);
  } else if (!hasVowelAt(englishWord, 2)) {
    var translatedWord = englishWord.slice(2) + englishWord.slice(0, 2);
  }
  return translatedWord + "ay";
};

var hasConsonantAt = function(word, position) {
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < vowels.length; i++) {
    if (word[position] === vowels[i]) {
      return true;
      break;
    }
  }
  return false;
}
