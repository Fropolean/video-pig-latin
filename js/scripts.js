// var pigLatin = function(userInput) {
//   var array = userInput.split("");
//   var remove = array.shift();
//   array.push(remove, "ay");
//   return array.toString();
// }


//START OF FUNCTIONING CODE
// var pigLatin = function(userInput) {
//   if (userInput[0] === "a" || userInput[0] === "e" || userInput[0] === "i" || userInput[0] === "o" || userInput[0] === "u") {
//     return userInput + "way"; // if first letter is vowel
//
//   } else if (userInput[2] !== "a" && userInput[2] !== "e" && userInput[2] !== "i" && userInput[2] !== "o" && userInput[2] !== "u" && userInput[2] !== "y") {
//     return userInput.slice(3) + userInput[0] + userInput[1] + userInput[2] + "ay"; //if first three letters are consonants
//
//   } else if (userInput[1] !== "a" && userInput[1] !== "e" && userInput[1] !== "i" && userInput[1] !== "o" && userInput[1] !== "u" && userInput[1] !== "y") {
//     return userInput.slice(2) + userInput[0] + userInput[1] + "ay"; //if first two letters are consonants
//
//   } else { //if word begins with consonant
//     return userInput.slice(1) + userInput[0] + "ay";
//   }
// }
//END OF FUNCTIONING CODE


var english = function(userInput) {

  var vowels = ["a", "e", "i", "o", "u", " "];
  var letters = userInput.split("");

  for (var i = 0; i < letters.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if(letters[i] === vowels[j]) {
        return i;
      }
    }
  }
}

var pigLatin = function(userInput) {
  var splitAt = english(userInput);
  return userInput.slice(splitAt) + userInput.slice(0, splitAt) + "ay";
}

$(document).ready(function() {
  $("form#userForm").submit(function(event) {

    var userInput = $("textarea#engInput").val();
    var userInput = userInput.toLowerCase();
    var result = pigLatin(userInput);

    // console.log(userInput);
    // console.log(result);

  $("#output").text(result);
  $("#result").show();
  event.preventDefault();
  });
});
