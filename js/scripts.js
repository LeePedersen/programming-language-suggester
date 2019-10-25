$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var q1 = parseInt($("input#question1").val());
    var q2 = parseInt($("select#question2").val());
    var q3 = parseInt($("select#question3").val());
    var q4 = parseInt($("select#question4").val());
    var q5 = $("input#question5").val();

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
      alert("Please answer all questions");
      // make error message for if q1 is not an int
    } else if (q2 + q3 + q4 < 6) {
      alert("python");
      var answer = "You should learn python";
    } else if (q2 + q3 + q4 < 9) {
      alert("java")
      var answer = "You should learn java";
    } else if (q2 + q3 + q4 >= 9) {
      alert("ruby")
      var answer = "You should learn ruby";
    } else {
      var answer = "Congratulations, you did something real weird and I don't know what. Go learn all the languages at once."
      // link to hacking site
    }
    event.preventDefault();
  });
});
