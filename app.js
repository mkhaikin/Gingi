localStorage.myScore = 0;
var myScore = localStorage.myScore;

function startGame(){
  var startGame = $("<h4>Fill in your name</h4><label>First Name :</label><input id='fname' type='text' name='fname'><button input='submit'>Submit</button>");
  $(".start").append(startGame);
  $("button").on("click", function(){
    var fname = $("#fname").val()
    localStorage.playerName = fname;
    startGame = $("test");
    $(".start").append(startGame + "Welcome player name " + fname);
  });
}

/*! Fades in page on load */
// $('body').css('display', 'none');
// $('body').fadeIn(1000);



$('#point').on("click",function(){
	var score = $('#score').html(myScore);
		if(myScore == 1){
			score.append(" point");
		} else{
			score.append(" points")
		}
	myScore++;
});
