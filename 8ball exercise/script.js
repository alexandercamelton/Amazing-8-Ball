
function random() {
	var eightball = $('.image'); 
	var ansbox = $('#ansbox');
	ansbox.hide();
	eightball.on( 'click', answer);
}

function answer() {
	var ans1 = 'It is certain';
	var ans2 = 'It is decidedly so';
	var ans3 = 'Without a doubt';
	var ans4 = 'Yes definitely';
	var ans5 = 'You may rely on it';
	var ansArray = [ans1, ans2, ans3, ans4, ans5];
	
	var randAns = ansArray[Math.floor(Math.random()*ansArray.length)]; 
	
	var eightball = $('.image');
	eightball.css('background-image', 'url(8ball2.png)');
	var ansbox = $('#ansbox')
		ansbox.show();
		ansbox.text(randAns);
	
}

function refresh() {
	var eightball = $('.image');
	var textbox = $('#textbox');
	var ansbox = $('#ansbox');
	eightball.css('background-image', 'url(8ball.png');
	textbox.val(' ')
	ansbox.hide();
}
$(document).ready(random);