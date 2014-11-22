$(document).ready(function(){

    
$('#play-btn').click(function(){
     return fbGame();
    });
        
   
    var fbGame = function() {

var un = +prompt("Enter a number and only a number!");   
var fizz = "fizz!";
var buzz = "buzz!";
var fizzBuzz = "fizzbuzz!!";
              
 if (un % 1 != 0) {
        alert("no decimals and no letters allowed");
    }
    else {
    for (var i = 1; i <= un; i++) {
	
	if (i % 15 === 0) {
		$("p").append("<span class=\"fb\">" + fizzBuzz + "</span>");
	}

	else if (i % 3 === 0){
		$("p").append("<span class=\"f\">" + fizz + "</span>");

	}

	else if (i % 5 === 0) {
		$("p").append("<span class=\"b\">" + buzz + "</span>");
	}

	else {
		$("p").append("<span>" + i + "</span>");
	  }

    }
  } 
 }
});


