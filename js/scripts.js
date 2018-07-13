$ (document).ready(function(){
  $("form#myForm").submit(function(event){
    event.preventDefault()
  var userNumber = parseInt($("input#userInput").val())
console.log(userNumber);


for (var i=1; i < userNumber; i++){
  var result=""
    if (i % 15 == 0) console.log("PingPongP");
    else if (i % 3 == 0) console.log("Ping");
    else if (i % 5 == 0) console.log("Pong");
    else console.log(i);
    $("p#display").append(result+"</br>")
}

  });
});
