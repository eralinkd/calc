let nums = document.querySelectorAll('.num');
let text = document.querySelector('.text-cont');
let arithmetics = document.querySelectorAll('.arithmetic');
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');
let cube = document.querySelector('.cube');
let plusMinus = document.querySelector('.plus-minus');
let square = document.querySelector('.square');
let oneDivX = document.querySelector('.one-div-x');
let xDivTen = document.querySelector('.x-div-10');
let sqrt = document.querySelector('.sqrt');
let heart = document.querySelector('.heart');

let arithmeticsEntered = 0;
let firstNum = 0;
let a = '';
let b = '';
let secondNum = 0;

for (let num of nums){
	num.onclick = function(){
		if (arithmeticsEntered === 0){
			if (a === ''){
				text.textContent = num.textContent;
				a = text.textContent;
				if (num.textContent === '0' || num.textContent === '00'){
					a = '';
					text.textContent = '0';
				}

				firstNum = parseFloat(a);
				console.log('firstNum = '+firstNum);
			} else{
				text.textContent += num.textContent;
				a = text.textContent;
				firstNum = parseFloat(a);
				console.log('firstNum = '+firstNum);
			}
		} else{
			text.textContent += num.textContent;
			b += num.textContent;
			secondNum = parseFloat(b);
			console.log('secondNum = '+secondNum);
		}
	}
}

for (let arithmetic of arithmetics){
	arithmetic.onclick = function(){
		if (arithmeticsEntered === 0){
			text.textContent += arithmetic.textContent;
			if (arithmetic.textContent === '/'){
				arithmeticsEntered = 1;
			} else if(arithmetic.textContent === '*'){
				arithmeticsEntered = 2;
			} else if(arithmetic.textContent === '-'){
				arithmeticsEntered = 3;
			} else if(arithmetic.textContent === '+'){
				arithmeticsEntered = 4;
			}
		}
	}
}

equals.onclick = function(){
	if (arithmeticsEntered === 1){
		text.textContent = firstNum / secondNum;
	} else if(arithmeticsEntered === 2){
		text.textContent = firstNum * secondNum;
	} else if(arithmeticsEntered === 3){
		text.textContent = firstNum - secondNum;
	} else if(arithmeticsEntered === 4){
		text.textContent = firstNum + secondNum;
	}
	
	arithmeticsEntered = 0;
	a = text.textContent;
	firstNum = parseFloat(a);
	b = '';
	secondNum = 0;
}

clear.onclick = function(){
	text.textContent = '0';
	arithmeticsEntered = 0;
	firstNum = 0;
	a = '';
	b = '';
	secondNum = 0;
}
cube.onclick = function() {
	firstNum = firstNum * firstNum * firstNum;
	text.textContent = firstNum;
	a = text.textContent;
}
square.onclick = function() {
	firstNum = firstNum * firstNum;
	text.textContent = firstNum;
	a = text.textContent;
}
plusMinus.onclick = function() {
	firstNum = -firstNum;
	text.textContent = firstNum;
	a = text.textContent;
}
oneDivX.onclick = function() {
	firstNum = 1 / firstNum;
	text.textContent = firstNum;
	a = text.textContent;
}
xDivTen.onclick = function() {
	firstNum = firstNum / 10;
	text.textContent = firstNum;
	a = text.textContent;
}
sqrt.onclick = function() {
	firstNum = Math.sqrt(firstNum)
	text.textContent = firstNum;
	a = text.textContent;
}
heart.onclick = function() {
	heart.classList.toggle('active');
}