$ (document).ready(function(){
  $("form#myForm").submit(function(event){
    event.preventDefault();
  var userNumber = parseInt($("input#userInput").val());
console.log(userNumber);

for (var i=1; i < userNumber; i++){
  var result = "";
    if (i % 15 == 0) result = "PingPong";
    if (i % 3 == 0) result = "Ping";
    if (i % 5 == 0) result="Pong";
    if (i % 5 != 0 && i % 3 != 0) result = i;

    $("p#display").append(result+"</br>")
}

});
});
