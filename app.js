localStorage.myScore = 0;
var myScore = localStorage.myScore;

$('#point').on("click",function(){
	var score = $('#score').html(myScore);
		if(myScore == 1){
			score.append(" point");
		} else{
			score.append(" points")
		}
	myScore++;
});
