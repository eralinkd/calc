let nums = document.querySelectorAll('.num');
let text = document.querySelector('.text-cont');
let arithmetics = document.querySelectorAll('.arithmetic');
let isArithmeticsEntered = false;

for (let num of nums){
	num.onclick = function(){
		if (text.textContent === '0'){
			text.textContent = num.textContent;
		} else{
			text.textContent += num.textContent;
		}
	}
}

for (let arithmetic of arithmetics){
	arithmetic.onclick = function(){
		if (isArithmeticsEntered === false){
			text.textContent += arithmetic.textContent;
			isArithmeticsEntered = true;
		}
	}
}


