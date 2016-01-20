// var pigLatin = function(userInput) {
//   var array = userInput.split("");
//   var remove = array.shift();
//   array.push(remove, "ay");
//   return array.toString();
// }

var pigLatin = function(userInput) {
  if (userInput[0] === "a" || userInput[0] === "e" || userInput[0] === "i" || userInput[0] === "o" || userInput[0] === "u") {
    return userInput + "way";
  } else {
    return userInput.slice(1) + userInput[0] + "ay";
  }
}

$(document).ready(function() {
  $("form#userForm").submit(function(event) {

    var userInput = $("textarea#engInput").val();

    var result = pigLatin(userInput);

    // console.log(userInput);
    // console.log(result);

  $("#output").text(result);
  $("#result").show();
  event.preventDefault();
  });
});
