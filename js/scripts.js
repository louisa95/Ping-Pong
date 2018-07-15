$(document).ready(function() {
  $("form#myForm").submit(function(event) {
    event.preventDefault();
    $("p#display").html('');

    var userNumber = parseInt($("input#userInput").val());
    for (var i = 1; i <= userNumber; i++) {
      var result = "";

      if (i % 3 === 0) result = "Ping";
      if (i % 5 === 0) result += "Pong";
      if (i % 5 != 0 && i % 3 != 0) result = i;

      $("p#display").append(result + "</br>");
    };

  });
});
