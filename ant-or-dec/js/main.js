$(document).ready(function() {
	var imgBase="/ant-or-dec/img/";
	score = 0;
	inital_image = Math.floor(Math.random() * 6) + 1;
	$("#the_image").attr("src", imgBase+inital_image + ".jpg");

	reload = function(result, current, score) {
		count = Math.floor(Math.random() * 6) + 1;
		console.log(count,current)

		$("#the_image").attr("src", imgBase+count + ".jpg");
		console.log(count + ".jpg");

		$("#latest_result").text(result)
		$("#latest_score").text(score)
	}


	var check_ant = function() {
		check("ant");
	}

	var check_dec = function() {
		check("dec");
	}

	var check = function(who) {
		var src = $('#the_image').attr('src');
		guess = parseInt(src.replace("/img/","").split(".")[0]);

		dec = guess % 2 == 0;

		if(dec){
			if(who==="ant"){
				score += 1;
				sucess = true;
			}else{
				// failure
				sucess = false;
			}
			// if the player picked ant then add it sucess
		}else{
			if(who==="dec"){
				score += 1;
				sucess = true;
			}else{
				sucess = false;
			}
		}

		console.log("who:" + who);
		console.log("guess:" + guess);
		reload(sucess, guess, score);
	}

	$("#ant").click(check_ant);
	$("#dec").click(check_dec);

});