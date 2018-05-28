localStorage.myScore = 0;
var myScore = localStorage.myScore;

function collectName(){
	$('body').css('display', 'none');
	$('body').fadeIn(500);
  $('.container').fadeIn(1500);
}

$('button').on("click",function(){
	var userName = $('#userName').val();
	$('.container').css("visibility","hidden");
	$.getJSON(questions.json, function (data) {
			// Iterate the groups first.
			$.each(data.response.venue.tips.groups, function (index, value) {
					// Get the items
					var items = this.items; // Here 'this' points to a 'group' in 'groups'
					// Iterate through items.
					$.each(items, function () {
							console.log(this.text); // Here 'this' points to an 'item' in 'items'
					});
			});
	});
});

// $('#point').on("click",function(){
// 	var score = $('#score').html(myScore);
// 		if(myScore == 1){
// 			score.append(" point");
// 		} else{
// 			score.append(" points")
// 		}
// 	myScore++;
// });

// simple demo driver
setBar = function(percent) {
 $('#percentage').text(Math.floor(percent) + '%');
	$('#loadingbar').css('transform', 'translateX(-' + (100 - percent ) + '%)');

}

// demo more
currentPercent = 1;
var setPercent = setInterval(function() {
  currentPercent = (currentPercent >= 100) ? 0 : currentPercent + Math.random()/4;
  setBar(currentPercent);
	if(Math.floor(currentPercent) == 100){
    // alert("stop");
		console.log(currentPercent);
		clearInterval(setPercent);

	}
}, 5);
