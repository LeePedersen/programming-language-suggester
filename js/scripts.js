$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var q1 = parseInt($("input#question1").val());
    var q2 = parseInt($("select#question2").val());
    var q3 = parseInt($("select#question3").val());
    var q4 = parseInt($("select#question4").val());
    var q5 = $("input#question5").val();
    alert(q5);
    alert(q4);
    alert(q3);
    alert(q2);
    alert(q1);

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
      alert("Please answer all questions");
    } else if (q2 + q3 + q4 < 6) {
      alert("holy shit it works");
      var answer = "You should learn python";
    } else {
      alert("it sorta works");
    }
    event.preventDefault();
  });
});
