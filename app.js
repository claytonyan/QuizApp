$(document).ready(function(){

var question2 = ["Which president was Abe Lincoln?", "3rd", "14th", "16th", "23rd", "16th"];

var question3 = ["How many states are there in the continental US?", "48", "32", "50", "12", "48"];

var question4 = ["Which state is the largest in area?", "Washington", "California", "Texas", "Alaska", "Alaska"];

var question5 = ["How many original states were there?", "13", "5", "25", "12", "13"];

var currentAnswer = '1776';

var userAnswer = '';

var currentQuestion = $('h2').text();

var totalCorrect = '';


$('button').click(function(){



	var userAnswer = $('input[type=radio]:checked').parent().text();
	
	checkAnswer(userAnswer);



	var currentQuestion = $('h2').text();


	if (currentQuestion === 'When did the United States become a country?') {
		newquestion2();

	} else if (currentQuestion === question2[0]) {
		newquestion3();

	} else if (currentQuestion === question3[0]) {
		newquestion4();

	} else if (currentQuestion === question4[0]) {
		newquestion5();

	} else {
		alert('Your total score is '+ totalCorrect +' out of 5');
	}

});

function checkAnswer (userAnswer){
	if (userAnswer === currentAnswer) {
		totalCorrect++;
	}
	else {

	}
};


function newquestion2 (){
	for(i=0; i < question2.length-1; i+=1){
		$('h2').replaceWith("<h2>" +question2[0]+"</h2>");
		$('#answer1').replaceWith("<li id='answer1'><input type='radio' name='choice'>" +question2[1]+"</li>");
		$('#answer2').replaceWith("<li id='answer2'><input type='radio' name='choice'>" +question2[2]+"</li>");
		$('#answer3').replaceWith("<li id='answer3'><input type='radio' name='choice'>" +question2[3]+"</li>");
		$('#answer4').replaceWith("<li id='answer4'><input type='radio' name='choice'>" +question2[4]+"</li>");
	};
	currentAnswer = question2[5];

};

function newquestion3 (){
		for(i=0; i < question3.length-1; i+=1){
		$('h2').replaceWith("<h2>" +question3[0]+"</h2>");
		$('#answer1').replaceWith("<li id='answer1'><input type='radio' name='choice'>" +question3[1]+"</li>");
		$('#answer2').replaceWith("<li id='answer2'><input type='radio' name='choice'>" +question3[2]+"</li>");
		$('#answer3').replaceWith("<li id='answer3'><input type='radio' name='choice'>" +question3[3]+"</li>");
		$('#answer4').replaceWith("<li id='answer4'><input type='radio' name='choice'>" +question3[4]+"</li>");
	};
	currentAnswer = question3[5];
};

function newquestion4 (){
		for(i=0; i < question4.length-1; i+=1){
		$('h2').replaceWith("<h2>" +question4[0]+"</h2>");
		$('#answer1').replaceWith("<li id='answer1'><input type='radio' name='choice'>" +question4[1]+"</li>");
		$('#answer2').replaceWith("<li id='answer2'><input type='radio' name='choice'>" +question4[2]+"</li>");
		$('#answer3').replaceWith("<li id='answer3'><input type='radio' name='choice'>" +question4[3]+"</li>");
		$('#answer4').replaceWith("<li id='answer4'><input type='radio' name='choice'>" +question4[4]+"</li>");
	};
	currentAnswer = question4[5];
};

function newquestion5 (){
		for(i=0; i < question4.length-1; i+=1){
		$('h2').replaceWith("<h2>" +question5[0]+"</h2>");
		$('#answer1').replaceWith("<li id='answer1'><input type='radio' name='choice'>" +question5[1]+"</li>");
		$('#answer2').replaceWith("<li id='answer2'><input type='radio' name='choice'>" +question5[2]+"</li>");
		$('#answer3').replaceWith("<li id='answer3'><input type='radio' name='choice'>" +question5[3]+"</li>");
		$('#answer4').replaceWith("<li id='answer4'><input type='radio' name='choice'>" +question5[4]+"</li>");
	};
	currentAnswer = question5[5];
};

});