let nums = document.querySelectorAll('.num');
let text = document.querySelector('.text-cont');

for (let num of nums){
	num.onclick = function(){
		if (text.textContent === '0'){
			text.textContent = num.textContent;
		} else{
			text.textContent += num.textContent;
		}
	}
}