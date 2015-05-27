var isPalindrome = function(word) {
  // If word is Integer, convert to String
  word = word.toString();

  return word === word.split('').reverse().join('');
};

$(function() {
  $("form").submit(function(event) {
    var targetWord = $("input").val();
    var isPalindromes = isPalindrome(targetWord);

    if (!isPalindromes) {
      $(".is-palindrome").show();
    } else{
      $(".is-palindrome").hide();
    }

    $("#result-wrapper").show();
    event.preventDefault();
  });
});
