localStorage.myScore = 0;
var myScore = localStorage.myScore;

function startGame(){
  var startGame = $("<label>First Name</label><input type='text' name='fname'>");
  $(".start").append(startGame);
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
