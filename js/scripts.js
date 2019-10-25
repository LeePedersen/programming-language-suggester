var returnInt = function(wordNumber) {

}

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var q1 = parseInt($("input#question1").val());
    // try and parse written numbers as ints
    var q2 = parseInt($("select#question2").val());
    var q3 = parseInt($("select#question3").val());
    var q4 = parseInt($("select#question4").val());
    var q5 = $("input#question5").val();
    var q5 = q5.toLowerCase();

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
      var answer = " how to fill out forms properly"
      // make error message for if q1 is not an int
      // make sure results do not show up in this case
    } else if (q2 + q3 + q4 < 6 && q1 < 10) {
      var answer = " Python";
    } else if (q2 + q3 + q4 < 6) {
      var answer = " C++";
    } else if (q2 + q3 + q4 < 9 && q5.startsWith("y")) {
      var answer = " Java";
    } else if (q2 + q3 + q4 < 9) {
      var answer = " JavaScript";
    } else if (q2 + q3 + q4 >= 9) {
      var answer = " Ruby";
    } else {
      var answer = "... congratulations, you did something real weird and I don't know what. Go learn all the languages at once."
    }
    //take time to come up with answer
    // captcha
    $("#quiz-section").hide();
    $("#results").show();
    $("#answer").text(answer);
    event.preventDefault();
  });
});
