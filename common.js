let nums = document.querySelectorAll('.num');
let text = document.querySelector('.text-cont');
let arithmetics = document.querySelectorAll('.arithmetic');
let equals = document.querySelector('.equals');
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