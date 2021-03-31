let min = 1;
let max = 9;
let correct = 0;
let uncorrect = 0;

function getRandomInt(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer(userAnswer , correctAnswer) {
	if (userAnswer == correctAnswer) {
		alert("Ответ правильный");
		correct++;
	} else {
		alert("Оу! " + userAnswer + " неправильный ответ. " + "Правильный ответ " + correctAnswer);
		uncorrect++
	}
}

document.querySelector(".plus").onclick = function(){
	let numA = getRandomInt(min,max);
	let numB = getRandomInt(min,max);
	let userAnswer = prompt(numA +  " + " + numB + " = ", "");
	let correctAnswer = numA + numB;
	checkAnswer(userAnswer , correctAnswer) 
}

document.querySelector(".minus").onclick = function(){
	let numA = getRandomInt(min,max);
	let numB = getRandomInt(min,max);
	let userAnswer = prompt(numA +  " - " + numB + " = ", "");
	let correctAnswer = numA - numB;
	checkAnswer(userAnswer , correctAnswer) 
}

document.querySelector(".multiply").onclick = function(){
	let numA = getRandomInt(min,max);
	let numB = getRandomInt(min,max);
	let userAnswer = prompt(numA +  " * " + numB + " = ", "");
	let correctAnswer = numA * numB;
	checkAnswer(userAnswer , correctAnswer) 
}

document.querySelector(".divide").onclick = function(){
	let numA = getRandomInt(min,max);
	let numB = getRandomInt(min,max);
	alert("Пожалуйста, округли твой ответ до целого числа:" + " если .5 и выше, то вверх" + " если .4 и ниже, то вниз")
	let userAnswer = prompt(numA +  " / " + numB + " = ", "");
	let correctAnswer = Math.round(numA / numB);
	checkAnswer(userAnswer , correctAnswer) 
}

document.querySelector("select").onchange = function(){
	let value = document.querySelector("select").value;
	let easy = document.querySelector(".easy").value;
	let middle = document.querySelector(".middle").value;
	let hard = document.querySelector(".hard").value;

	switch(value) {
		case easy: {
			min = 1;
			max = 9;
			break
		}	
		case middle: {
			min = 10;
			max = 99;
			break
		}
		case hard: {
			min = 100;
			max = 999;
			break
		}
	}
}

document.querySelector('.stats').onclick = function(){
	alert("Ваш результат: \n правильные: " + correct + "\n неправильные " + uncorrect)
}

document.querySelector(".reset").onclick = function(){
	correct = 0;
	uncorrect = 0;
}



