$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var name = $("input#userName").val();
    var q1 = parseInt($("input#question1").val());
    var q2 = parseInt($("select#question2").val());
    var q3 = parseInt($("select#question3").val());
    var q4 = parseInt($("select#question4").val());
    var q5 = $("input#question5").val().toLowerCase();

    if (name) {
      var name = name.concat(", ");
    } else {
      var name = "Unidentified person, "
    }

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
      var answer = " how to fill out forms properly"
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

    $("#quiz-section").hide();
    $("form#captcha").show();
    event.preventDefault();

    $("form#captcha").submit(function(event) {
      $("form#captcha").hide();
      $("#results").show();
      $("#name").text(name);
      $("#answer").text(answer);
      event.preventDefault();
    });

    $("#retake").click(function(event) {
      $("#results").hide();
      $("#quiz-section").show();
    });
  });
});
