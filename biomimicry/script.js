
let step1 = document.querySelector('.step1');
let step2 = document.querySelector('.step2');
let step3 = document.querySelector('.step3');
let step4 = document.querySelector('.step4');
let step5 = document.querySelector('.step5');

function showImage1() {
	step1.classList.remove('close');
	bg1.classList.add('show');
	step1.classList.add('show');
	step5.classList.remove('show');
	}

step5.addEventListener('click', showImage1)

function showImage2() {
	step2.classList.add('show');
	step1.classList.remove('show');
	step1.classList.add('close');
	console.log('step 1 was clicked');
	}

step1.addEventListener('click', showImage2)

function showImage3() {
	step3.classList.add('show');
	step2.classList.remove('show');
	}

step2.addEventListener('click', showImage3)

function showImage4() {
	step4.classList.add('show');
	step3.classList.remove('show');
	}

step3.addEventListener('click', showImage4)

function showImage5() {
	step5.classList.add('show');
	step4.classList.remove('show');
}

step4.addEventListener('click', showImage5)

